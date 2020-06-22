import TaskRepository from "./task-repository.js";
import TaskRenderer from "./task-renderer.js";

const text = document.querySelector("input");
const date = document.querySelector("input[type=date]");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const repository = new TaskRepository();
const renderer = new TaskRenderer(".list", repository);

renderer.render();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newLi = document.createElement("li");
  newLi.textContent = `${date.value} - ${text.value}`;
  ul.append(newLi);
  form.reset();
});
