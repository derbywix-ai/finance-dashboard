import { databases } from "./appwrite";

// Replace with your Appwrite database & collection IDs
const DATABASE_ID = "your_database_id";
const COLLECTION_ID = "invoices";

// Get all invoices
export const getInvoices = async () => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    return response.documents;
  } catch (err) {
    console.error("Error fetching invoices:", err);
    throw err;
  }
};

// Create a new invoice
export const createInvoice = async (invoice) => {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      undefined, // let Appwrite auto-generate ID
      invoice
    );
    return response;
  } catch (err) {
    console.error("Error creating invoice:", err);
    throw err;
  }
};

// Update an existing invoice
export const updateInvoice = async (invoiceId, invoice) => {
  try {
    const response = await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      invoiceId,
      invoice
    );
    return response;
  } catch (err) {
    console.error("Error updating invoice:", err);
    throw err;
  }
};

// Delete an invoice
export const deleteInvoice = async (invoiceId) => {
  try {
    await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, invoiceId);
    return true;
  } catch (err) {
    console.error("Error deleting invoice:", err);
    throw err;
  }
};

// Mark invoice as Paid
export const markInvoicePaid = async (invoiceId) => {
  try {
    const invoice = await databases.getDocument(DATABASE_ID, COLLECTION_ID, invoiceId);
    invoice.status = "Paid";
    return await updateInvoice(invoiceId, invoice);
  } catch (err) {
    console.error("Error marking invoice as paid:", err);
    throw err;
  }
};
