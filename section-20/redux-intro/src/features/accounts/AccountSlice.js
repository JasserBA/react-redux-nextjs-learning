const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export default function accountReducer(state = initialStateAccount, action) {
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
        isLoading: false,
      };
    case "account/withdraw":
      return {
        ...state,
        loan: action.loan - action.payload,
      };
    case "account/requestLoan":
      if (state.load > 0) return state;
      // later
      return {
        ...state,
        loan: action.payload,
        loanPurpose: action.loanPurpose || "",
        balance: state.balance + action.payload.amount,
      };
    case "account/convertingCurrency":
      return { ...state, isLoading: true };

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
// store.dispatch({ type: "account/deposit", payload: 600 });
// console.log("hey redux"); // show current state
// console.log(store.getState()); // { balance: 1200, loan: 0, loanPurpose: "" }
// store.dispatch({ type: "account/requestLoan", payload: 200 });
// console.log(store.getState()); // { balance: 1200, loan: 200, loanPurpose: "" }

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, loanPurpose: "Buy a house" },
// });
// console.log(store.getState()); // {"balance": 1200,"loan": {"amount": 1000,"loanPurpose": "Buy a house"},"loanPurpose": ""}

// store.dispatch({
//   type: "account/payLoan",
// });

const ACCOUNT_ACTIONS = {
  DEPOSIT: "account/deposit",
  WITHDRAW: "account/withdraw",
  REQUEST_LOAN: "account/requestLoan",
  PAY_LOAN: "account/payLoan",
};

export function deposit(amount, currency) {
  if (currency === "USD")
    return { type: ACCOUNT_ACTIONS.DEPOSIT, payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&symbols=USD`
    );
    const data = res.json();
    console.log(data);
    const converted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted });
  };
}

export function withdraw(amount) {
  return { type: ACCOUNT_ACTIONS.WITHDRAW, payload: amount };
}

export function requestLoan(amount, loanPurpose) {
  return {
    type: ACCOUNT_ACTIONS.REQUEST_LOAN,
    payload: { amount, loanPurpose },
  };
}

export function payLoan() {
  return { type: ACCOUNT_ACTIONS.PAY_LOAN };
}
