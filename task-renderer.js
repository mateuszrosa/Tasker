class TaskRenderer {
  constructor(list, tasks) {
    this.list = document.querySelector(list);
    this.tasks = tasks;
  }
  render() {
    this.tasks.forEach((task) => {
      const check = document.createElement("input");
      check.setAttribute("type", "checkbox");
      const newLi = document.createElement("li");
      newLi.textContent = `${task.date} - ${task.text}`;
      newLi.prepend(check);
      this.list.append(newLi);
    });
  }
}

export default TaskRenderer;
