import TaskRepository from "./task-repository.js";
import TaskRenderer from "./task-renderer.js";
import TaskMapper from "./task-mapper.js";
import AppStorage from "./app-storage.js";

const form = document.querySelector("form");
const btn = document.querySelector("button");

const storage = new AppStorage();
const mapper = new TaskMapper();
const repository = new TaskRepository(storage);
const renderer = new TaskRenderer("ul", repository.getAll());

renderer.render(repository.getAll());

repository.subscribe((tasks) => {
  renderer.render(tasks);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = mapper.getTask(form);
  repository.add(task);

  form.reset();
});
