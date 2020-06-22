class TaskRenderer {
  constructor(list, repo) {
    this.list = document.querySelector("ul");
    this.repo = repo;
  }
  render() {
    this.repo.getAll().forEach((element) => {
      const newLi = document.createElement("li");
      newLi.textContent = `${element.date} - ${element.text}`;
      this.list.append(newLi);
    });
  }
}

export default TaskRenderer;
