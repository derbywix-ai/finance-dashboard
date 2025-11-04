import React, { useState } from "react";
import "./CreateInvoice.css";

function CreateInvoice({ onAddInvoice, onBack }) {
  const [client, setClient] = useState("");
  const [amount, setAmount] = useState("");
  const [paid, setPaid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!client || !amount) return alert("Please fill in all fields.");

    const newInvoice = {
      id: Date.now(),
      client,
      amount: parseFloat(amount),
      paid,
    };

    onAddInvoice(newInvoice);
    setClient("");
    setAmount("");
    setPaid(false);
    onBack(); // return to Dashboard
  };

  return (
    <div className="create-invoice">
      <h2>Create New Invoice</h2>
      <form onSubmit={handleSubmit}>
        <label>Client Name</label>
        <input
          type="text"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          placeholder="Enter client name"
        />

        <label>Amount (₦)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />

        <label>
          <input
            type="checkbox"
            checked={paid}
            onChange={(e) => setPaid(e.target.checked)}
          />
          Mark as Paid
        </label>

        <div className="buttons">
          <button type="button" className="back-btn" onClick={onBack}>
            ← Back
          </button>
          <button type="submit" className="save-btn">
            Save Invoice
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateInvoice;
