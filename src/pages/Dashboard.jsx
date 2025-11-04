import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import CreateInvoice from "./CreateInvoice";

function Dashboard({ onLogout }) {
  const [invoices, setInvoices] = useState([]);
  const [summary, setSummary] = useState({ total: 0, vat: 0, paid: 0 });
  const [showCreate, setShowCreate] = useState(false);

  // Recalculate summary whenever invoices change
  useEffect(() => {
    const total = invoices.reduce((sum, i) => sum + i.amount, 0);
    const vat = total * 0.075; // 7.5% VAT
    const paid = invoices.filter((i) => i.paid).reduce((sum, i) => sum + i.amount, 0);
    setSummary({ total, vat, paid });
  }, [invoices]);

  const handleAddInvoice = (newInvoice) => {
    setInvoices((prev) => [...prev, newInvoice]);
    setShowCreate(false);
  };

  if (showCreate)
    return (
      <CreateInvoice onAddInvoice={handleAddInvoice} onBack={() => setShowCreate(false)} />
    );

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1>Finance Dashboard</h1>
        <button onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </nav>

      <div className="summary-section">
        <div className="card">
          <h3>Total Invoices</h3>
          <p>{invoices.length}</p>
        </div>
        <div className="card">
          <h3>Total Amount</h3>
          <p>₦{summary.total.toLocaleString()}</p>
        </div>
        <div className="card">
          <h3>VAT (7.5%)</h3>
          <p>₦{summary.vat.toLocaleString()}</p>
        </div>
        <div className="card">
          <h3>Paid</h3>
          <p>₦{summary.paid.toLocaleString()}</p>
        </div>
      </div>

      <div className="actions">
        <button className="create-btn" onClick={() => setShowCreate(true)}>
          + New Invoice
        </button>
      </div>

      <div className="invoice-table">
        <h2>Invoices</h2>
        {invoices.length === 0 ? (
          <p className="empty">No invoices yet. Create one above.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Client</th>
                <th>Amount (₦)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv, idx) => (
                <tr key={inv.id}>
                  <td>{idx + 1}</td>
                  <td>{inv.client}</td>
                  <td>{inv.amount.toLocaleString()}</td>
                  <td>
                    <span className={inv.paid ? "paid" : "unpaid"}>
                      {inv.paid ? "Paid" : "Unpaid"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
