class TaskMapper {
  getTask(form) {
    return {
      text: form.querySelector("input").value,
      date: form.querySelector("input[type=date]").value,
      completed: false,
    };
  }
}

export default TaskMapper;
