import React from "react";

export default function InvoiceRow({ invoice, onMarkPaid, onEdit, onDelete }) {
  return (
    <tr className="border-b">
      <td className="px-4 py-2">{invoice.clientName}</td>
      <td className="px-4 py-2">{invoice.clientEmail}</td>
      <td className="px-4 py-2">₦{invoice.amount}</td>
      <td className="px-4 py-2">₦{invoice.vatAmount}</td>
      <td className="px-4 py-2">₦{invoice.total}</td>
      <td className="px-4 py-2">{invoice.status}</td>
      <td className="px-4 py-2 space-x-2">
        {invoice.status === "Unpaid" && (
          <button
            onClick={() => onMarkPaid(invoice)}
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
          >
            Mark Paid
          </button>
        )}
        <button
          onClick={() => onEdit(invoice)}
          className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(invoice)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
