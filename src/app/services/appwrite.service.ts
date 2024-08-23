import { Injectable } from '@angular/core';
import { Client, Account, Databases } from 'appwrite';

@Injectable({
  providedIn: 'root'
})
export class AppwriteService {
  private client: Client;
  public account: Account;
  public databases: Databases;
  constructor() {
    this.client = new Client();
    this.client
      .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
      .setProject('669cbafc001a06e0c089'); // Your project ID

    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
  }
  
  // Example method for creating a session
  async createSession(email: string, password: string) {
    return await this.account.createEmailPasswordSession(email, password);
  }

  // Example method for fetching documents from a collection
  async getDocuments(databaseId: string, collectionId: string) {
    return await this.databases.listDocuments(databaseId, collectionId);
  }
}
