class TaskRepository {
  constructor() {
    this.tasks = [{ date: "01:12:2020", text: "Siema" }];
    this.subscribers = [];
  }

  getAll() {
    return this.tasks;
  }

  add(task) {
    this.tasks.push(task);
  }

  remove(taskId) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
    this.onChange();
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  onChange() {
    this.subscribers.forEach((s) => {
      s(this.tasks);
    });
  }
}

export default TaskRepository;
