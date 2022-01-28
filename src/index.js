import { createStore } from "redux";

/* const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return { type: ADD_TODO, text };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== parseInt(action.id));
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((todo) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    li.innerText = todo.text;
    button.innerText = "DEl";
    button.addEventListener("click", dispatchDeleteToDo);
    li.appendChild(button);
    li.id = todo.id;
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);
console.log(store.getState());

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
 */

const reducer = (currentState, action) => {
  switch (
    action.type // action === 객체
  ) {
    case "LOG_IN":
      return {
        ...currentState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...currentState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...currentState,
        posts: [...currentState.posts, action.data],
      };
    default:
      return currentState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);

console.log("1st", store.getState());

// actionCreator
const login = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

store.dispatch(
  login({
    id: 1,
    name: "zerocho",
    admin: true,
  })
);

console.log("login", store.getState());

store.dispatch(
  addPost({
    useId: 1,
    id: 1,
    contents: "Hello, redux",
  })
);

console.log("addPost_1", store.getState());

store.dispatch(
  addPost({
    useId: 2,
    id: 2,
    contents: "Hello, basic-redux",
  })
);

console.log("addPost_2", store.getState());

store.dispatch(logOut());

console.log("logOut", store.getState());
