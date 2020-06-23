class TaskRenderer {
  constructor(list, tasks) {
    this.list = document.querySelector(list);
    this.tasks = tasks;
  }
  render() {
    this.list.textContent = "";
    this.tasks.forEach((task) => {
      const check = document.createElement("input");
      check.setAttribute("type", "checkbox");
      const newLi = document.createElement("li");
      const newDiv = document.createElement("div");
      const newSpanTitle = document.createElement("span");
      newSpanTitle.textContent = task.text;
      const newSpanDate = document.createElement("span");
      newSpanDate.textContent = task.date;
      newDiv.append(newSpanDate);
      newDiv.append(newSpanTitle);
      newLi.append(check);
      newLi.append(newDiv);
      this.list.append(newLi);
    });
  }
}

export default TaskRenderer;
