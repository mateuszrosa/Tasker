class TaskMapper {
  getTask(form) {
    return {
      text: form.querySelector("input").value,
      date: form.querySelector("input[type=date]").value,
    };
  }
}

export default TaskMapper;
