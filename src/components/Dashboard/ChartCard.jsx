import React from "react";
import { Pie } from "react-chartjs-2"; // Or any chart library

export default function ChartCard({ title, data }) {
  return (
    <div className="bg-white p-4 rounded shadow h-64">
      <h3 className="font-bold mb-2">{title}</h3>
      {data ? (
        <Pie data={data} />
      ) : (
        <p className="text-gray-400 text-center mt-20">Chart will render here</p>
      )}
    </div>
  );
}
