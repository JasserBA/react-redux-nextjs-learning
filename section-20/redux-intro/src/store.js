import { createStore } from "redux";
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

const store = createStore(reducer);

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

function deposit(amount) {
  return { type: ACCOUNT_ACTIONS.DEPOSIT, payload: amount };
}

function withdraw(amount) {
  return { type: ACCOUNT_ACTIONS.WITHDRAW, payload: amount };
}

function requestLoan(amount, loanPurpose) {
  return {
    type: ACCOUNT_ACTIONS.REQUEST_LOAN,
    payload: { amount, loanPurpose },
  };
}

function payLoan() {
  return { type: ACCOUNT_ACTIONS.PAY_LOAN };
}
store.dispatch(deposit(600));
console.log("hey redux"); // show current state
console.log(store.getState()); // { balance: 1200, loan: 0, loanPurpose: "" }

store.dispatch(withdraw(200, "Buy a house"));
console.log(store.getState());

store.dispatch(requestLoan(200, "Buy a house"));
console.log(store.getState()); // { balance: 1200, loan: 200, loanPurpose: "Buy a house" }

store.dispatch(payLoan());
console.log(store.getState()); // { balance: 1200, loan: 200, loanPurpose: "Buy a house
