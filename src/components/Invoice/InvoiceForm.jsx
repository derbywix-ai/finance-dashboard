import React, { useState } from "react";

export default function InvoiceForm({ onSubmit, invoice }) {
  const [clientName, setClientName] = useState(invoice?.clientName || "");
  const [clientEmail, setClientEmail] = useState(invoice?.clientEmail || "");
  const [amount, setAmount] = useState(invoice?.amount || 0);
  const [vat, setVat] = useState(invoice?.vat || 0);
  const [dueDate, setDueDate] = useState(invoice?.dueDate || "");
  const [status, setStatus] = useState(invoice?.status || "Unpaid");

  const handleSubmit = (e) => {
    e.preventDefault();
    const vatAmount = (amount * vat) / 100;
    const total = Number(amount) + Number(vatAmount);
    onSubmit({ clientName, clientEmail, amount, vat, vatAmount, total, dueDate, status });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Create Invoice</h2>

      <input
        type="text"
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="email"
        placeholder="Client Email"
        value={clientEmail}
        onChange={(e) => setClientEmail(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="VAT %"
        value={vat}
        onChange={(e) => setVat(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="Unpaid">Unpaid</option>
        <option value="Paid">Paid</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Save Invoice
      </button>
    </form>
  );
}
