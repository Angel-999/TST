import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppwriteService } from './appwrite.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();
  private username = new BehaviorSubject<string>("");
  username$ = this.username.asObservable();

  constructor(private appwriteService: AppwriteService) {
    this.checkLoginStatus();
  }

  async login(email: string, password: string) {
    try {
      await this.appwriteService.createSession(email, password);
      this.loggedIn.next(true);
    } catch (error) {
      this.loggedIn.next(false);
      console.error('Login failed:', error);
    }
  }

  async logout() {
    try {
      await this.appwriteService.account.deleteSession('current');
      this.loggedIn.next(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  async checkLoginStatus() {
    try {
      const session = await this.appwriteService.account.get();
      this.username.next(session.name);
      this.loggedIn.next(true);
    } catch (error) {
      this.loggedIn.next(false);
    }
  }
}
