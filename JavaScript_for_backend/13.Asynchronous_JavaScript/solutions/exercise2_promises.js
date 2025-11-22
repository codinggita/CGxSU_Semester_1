const calculateCompoundInterest = (principal, rate, years) => {
  return Promise.resolve()
    .then(() => {
      if (principal <= 0 || rate < 0 || years < 0) {
        throw new Error('Invalid inputs');
      }
      return { principal, rate, years };
    })
    .then(({ principal, rate, years }) => {
      const amount = principal * Math.pow(1 + rate / 100, years);
      return amount;
    })
    .then(amount => {
      return `Final amount: $${amount.toFixed(2)}`;
    });
};

calculateCompoundInterest(1000, 5, 10)
  .then(result => console.log(result))
  .catch(error => console.error(error.message));

export { calculateCompoundInterest };
