const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  //   switch (action.type) {
  //     case "SET_BALANCE":
  //       return {
  //         ...state,
  //         balance: action.payload,
  //       };
  //     case "SET_LOAD":
  //       return {
  //         ...state,
  //         loan: action.payload,
  //       };
  //     case "SET_LOAN_PURPOSE":
  //       return {
  //         ...state,
  //         loanPurpose: action.payload,
  //       };
  //     default:
  //       break;
  //   }
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: action.payload + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        loan: action.payload - action.payload,
      };
    case "account/requestLoan":
      if (state.load > 0) return state;
      // later
      return {
        ...state,
        loan: action.payload,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: action.payload - state.loan,
      };
    default:
      return state;
  }
}
