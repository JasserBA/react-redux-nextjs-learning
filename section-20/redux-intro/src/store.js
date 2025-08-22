import { combineReducers, createStore } from "redux";
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
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

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

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

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: { fullName },
  };
}

store.dispatch(createCustomer("JASSER", "123456789"));
console.log(store.getState());
store.dispatch(updateName("JASSER ALI"));
console.log(store.getState());
