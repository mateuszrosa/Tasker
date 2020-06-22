import TaskRepository from "./task-repository.js";
import TaskRenderer from "./task-renderer.js";
import TaskMapper from "./task-mapper.js";

const form = document.querySelector("form");

const repository = new TaskRepository();
const mapper = new TaskMapper();
const renderer = new TaskRenderer("ul", repository);

renderer.render();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = mapper.getTask(form);
  console.log(task);
  form.reset();
});
