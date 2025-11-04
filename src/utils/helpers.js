// Calculate VAT and total
export const calculateVAT = (amount, vatPercent) => {
  const vatAmount = (amount * vatPercent) / 100;
  const total = Number(amount) + vatAmount;
  return { vatAmount, total };
};

// Format number as currency
export const formatCurrency = (num) => `₦${Number(num).toLocaleString()}`;
