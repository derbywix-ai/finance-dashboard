import React from "react";

export default function SummaryCard({ title, amount }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-gray-500">{title}</p>
      <p className="text-xl font-semibold mt-1">₦{amount}</p>
    </div>
  );
}
