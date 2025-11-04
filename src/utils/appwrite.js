import { Client, Account, Databases } from "appwrite";

// Appwrite client setup
const client = new Client()
  .setEndpoint("https://sgp.cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("6908935b00203c82eaa4"); // Your project ID

export const account = new Account(client);
export const databases = new Databases(client);

export default client;
