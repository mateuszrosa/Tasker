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
      newLi.setAttribute("key", this.getId());
      const newDiv = document.createElement("div");
      const newSpanTitle = document.createElement("span");
      const newBtn = document.createElement("button");
      newBtn.textContent = "Remove";
      newSpanTitle.textContent = task.text;
      const newSpanDate = document.createElement("span");
      newSpanDate.textContent = task.date;
      newDiv.append(newSpanDate);
      newDiv.append(newSpanTitle);
      newLi.append(check);
      newLi.append(newDiv);
      newLi.append(newBtn);
      this.list.append(newLi);
    });
  }
  getId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }
}

export default TaskRenderer;
