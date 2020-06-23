class TaskRenderer {
  constructor(list, repository) {
    this.list = document.querySelector(list);
    this.repo = repository;
  }
  render() {
    this.list.textContent = "";
    this.repo.getAll().forEach((task) => {
      const check = document.createElement("input");
      check.setAttribute("type", "checkbox");
      const newLi = document.createElement("li");
      newLi.setAttribute("key", task.id);
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
      newBtn.addEventListener("click", () => this.repo.remove(task.id));
      this.list.append(newLi);
    });
  }
}

export default TaskRenderer;
