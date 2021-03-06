class TaskRepository {
  constructor(storage) {
    this.tasks = storage.get("APP_TASKS") || [];
    this.subscribers = [];
    this.storage = storage;
  }

  getAll() {
    return this.tasks;
  }

  add(task) {
    this.tasks.push(task);
    this.onChange();
  }

  remove(taskId) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
    this.onChange();
  }

  updateCompleted(completed, taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    task.completed = !completed;
    this.onChange();
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  onChange() {
    this.storage.set("APP_TASKS", this.tasks);
    this.subscribers.forEach((s) => {
      s(this.tasks);
    });
  }
}

export default TaskRepository;
