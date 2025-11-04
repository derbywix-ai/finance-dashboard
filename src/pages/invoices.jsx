import React, { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";
import InvoiceForm from "../components/Invoice/InvoiceForm";
import InvoiceTable from "../components/Invoice/InvoiceTable";

const client = new Client()
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject("6908935b00203c82eaa4");

const databases = new Databases(client);
const DATABASE_ID = "your_database_id"; // replace with your Appwrite DB ID
const COLLECTION_ID = "invoices"; // replace with your invoices collection ID

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);

  // Fetch invoices
  const fetchInvoices = async () => {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
      setInvoices(response.documents);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  // Add or update invoice
  const handleSaveInvoice = async (invoice) => {
    try {
      if (invoice.$id) {
        // Update existing invoice
        await databases.updateDocument(DATABASE_ID, COLLECTION_ID, invoice.$id, invoice);
      } else {
        // Create new invoice
        await databases.createDocument(DATABASE_ID, COLLECTION_ID, undefined, invoice);
      }
      fetchInvoices();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete invoice
  const handleDeleteInvoice = async (invoice) => {
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, invoice.$id);
      fetchInvoices();
    } catch (err) {
      console.error(err);
    }
  };

  // Mark as paid
  const handleMarkPaid = async (invoice) => {
    try {
      await databases.updateDocument(DATABASE_ID, COLLECTION_ID, invoice.$id, { ...invoice, status: "Paid" });
      fetchInvoices();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit invoice (fill form)
  const handleEditInvoice = (invoice) => {
    // Simply passing invoice to InvoiceForm via state or props
    setSelectedInvoice(invoice);
  };

  const [selectedInvoice, setSelectedInvoice] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Invoices Management</h1>

      <InvoiceForm onSubmit={handleSaveInvoice} invoice={selectedInvoice} />

      <InvoiceTable
        invoices={invoices}
        onMarkPaid={handleMarkPaid}
        onEdit={handleEditInvoice}
        onDelete={handleDeleteInvoice}
      />
    </div>
  );
}
