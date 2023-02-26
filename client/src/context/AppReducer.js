const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      const transactions = [...state.transactions, action.payload];
      console.log(transactions);
      return {
        ...state,
        transactions,
      };
    case "REMOVE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default appReducer;
