import React from "react";

export default function MetricsCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col items-center">
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
