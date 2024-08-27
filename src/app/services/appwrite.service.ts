import { Injectable, OnInit } from '@angular/core'
import { Client, Account, Databases, Avatars, AppwriteException } from 'appwrite';

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {
  private client: Client;
  public account: Account;
  public databases: Databases;
  public avatars: Avatars;
  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
      .setProject('669cbafc001a06e0c089'); // Your project ID

    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
    this.avatars = new Avatars(this.client);
  }

  async GetAvatars(username: string): Promise<string | null> {
    if (!username) {
      return null;
    }

    try {
      const response = await this.avatars.getInitials(username);
      // Assuming `response` contains the URL or relevant data
      return response.href ?? null; // Adjust based on actual response structure
    } catch (error) {
      console.error('Error getting avatar:', error);
      return null;
    }
  }
  private async isAuthenticated(): Promise<boolean> {
    try {
      await this.account.get(); // Try fetching the session
      return true;
    } catch {
      return false;
    }
  }
  // Example method for creating a session
  async createSession(email: string, password: string) {
    return await this.account.createEmailPasswordSession(email, password);
  }

  // Example method for fetching documents from a collection
  async getDocuments() {
    if (!await this.isAuthenticated()) {
      throw new Error('User is not authenticated');
    }
    else{
      console.log('User is authenticated');
    }
    try {
      const result = await this.databases.listDocuments('tst', '66a943a7000297d6423b');
      return result;
    }
    catch (error) {
      if (error instanceof AppwriteException) {
        throw new Error(error.message);
      } else {
        throw error;
      }
    }
    //return await this.databases.listDocuments(databaseId, collectionId);
  }
}
