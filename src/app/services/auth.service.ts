import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppwriteService } from './appwrite.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(true);
  isLoggedIn$ = this.loggedIn.asObservable();
  private username = new BehaviorSubject<string>("");
  username$ = this.username.asObservable();
  private hascheckLogInStatus = new BehaviorSubject<boolean>(false);
  hascheckLogInStatus$ = this.hascheckLogInStatus.asObservable();
  private AvatarURL = new BehaviorSubject<string>("");
  AvatarURL$ = this.AvatarURL.asObservable();

  constructor(private appwriteService: AppwriteService) {
    this.checkLoginStatus();
  }

  async login(email: string, password: string) {
    try {
      await this.appwriteService.createSession(email, password)
      this.loggedIn.next(true);
      this.checkLoginStatus();
    } catch (error) {
      this.loggedIn.next(false);
      console.error('Login failed:', error);
    }
  }

  async logout() {
    try {
      await this.appwriteService.account.deleteSession('current');
      this.loggedIn.next(false);
      this.checkLoginStatus();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  async checkLoginStatus() {
    try {
      const session = await this.appwriteService.account.get();
      this.loggedIn.next(true);
      this.hascheckLogInStatus.next(true);
      this.username.next(session.name);
      this.AvatarURL.next(await this.appwriteService.avatars.getInitials(session.name).href);
    } catch (error) {
      this.loggedIn.next(false);
      this.hascheckLogInStatus.next(true);
      this.username.next("");
      this.AvatarURL.next("");
    }
  }
}
