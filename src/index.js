import { createStore } from "redux";

const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countModifier);

const onChange = () => {
  number.innerText = store.getState();
};

store.subscribe(onChange);

add.addEventListener("click", () => {
  store.dispatch({ type: ADD });
});

minus.addEventListener("click", () => {
  store.dispatch({ type: MINUS });
});
