import React from "react";
import InvoiceRow from "./InvoiceRow";

export default function InvoiceTable({ invoices, onMarkPaid, onEdit, onDelete }) {
  if (!invoices || invoices.length === 0) {
    return <p className="text-gray-500">No invoices yet.</p>;
  }

  return (
    <table className="w-full bg-white rounded shadow overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-2 text-left">Client Name</th>
          <th className="px-4 py-2 text-left">Email</th>
          <th className="px-4 py-2 text-left">Amount</th>
          <th className="px-4 py-2 text-left">VAT</th>
          <th className="px-4 py-2 text-left">Total</th>
          <th className="px-4 py-2 text-left">Status</th>
          <th className="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => (
          <InvoiceRow
            key={invoice.$id || invoice.id}
            invoice={invoice}
            onMarkPaid={onMarkPaid}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
