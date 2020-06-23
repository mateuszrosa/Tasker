class TaskRenderer {
  constructor(list, repo) {
    this.list = document.querySelector(list);
    this.repo = repo;
  }
  render() {
    this.list.textContent = "";
    const tasks = this.repo.getAll();
    tasks.forEach((task) => {
      const newLi = document.createElement("li");
      newLi.textContent = `${task.date} - ${task.text}`;
      this.list.append(newLi);
    });
  }
}

export default TaskRenderer;
