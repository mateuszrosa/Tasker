import TaskRepository from "./task-repository.js";
import TaskRenderer from "./task-renderer.js";
import TaskMapper from "./task-mapper.js";

const form = document.querySelector("form");

const mapper = new TaskMapper();
const repository = new TaskRepository();
const renderer = new TaskRenderer("ul", repository);

renderer.render(repository.getAll());

repository.subscribe(() => {
  renderer.render();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = mapper.getTask(form);
  repository.add(task);

  form.reset();
});
