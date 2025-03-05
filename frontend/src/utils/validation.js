export const validationRules = {
  amount: {
    min: 1000,
    max: 10000000,
    message: "Investment amount must be between $1,000 and $10,000,000",
  },
  allocation: {
    totalPercentage: 100,
    message: "Total allocation must equal 100%",
  },
};
