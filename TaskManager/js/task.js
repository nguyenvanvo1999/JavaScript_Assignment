"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

var addToTaskList = function () {
  var taskTextbox = $("task");
  var newTask = new Task(taskTextbox.value);
  if (newTask.isValid()) {
    // add task to tasklist
    taskList.add(newTask);
    // save task list to local storage
    taskList.save();
    // display tasklist on view
    taskList.display();
    // reset task textbox
    taskTextbox.value = "";
  } else {
    alert("Please enter a task");
  }
  taskTextbox.focus();
};

var clearTaskList = function () {
  taskList.clear();
  $("task").focus();
};

var deleteFromTaskList = function () {
  taskList.delete(this.id); // this => clicked link
  taskList.save();
  taskList.display();
  $("task").focus();
};

var editTaskList = function () {
  $("task").value = taskList.tasks[this.id];
  taskList.idCurrent = this.id;
  $("add_task").setAttribute("disabled","true");
  $("clear_tasks").setAttribute("disabled","true");
  $("edit_task").removeAttribute("disabled");
};
var editFunction = function(){
   taskList.tasks[taskList.idCurrent] = $("task").value;
   taskList.save();
  taskList.display();
  $("task").focus()
  $("task").value= "";
  $("add_task").removeAttribute("disabled");
  $("clear_tasks").removeAttribute("disabled");
  $("edit_task").setAttribute("disabled","true");
}

window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;
  $("edit_task").onclick = editFunction;

  // set value for tasklist properties
  taskList.displayDiv = $("tasks");
  taskList.deleteClickHandler = deleteFromTaskList;
  taskList.editTask = editTaskList;

  // load tasks and display
  taskList.load();
  taskList.display();
  $("task").focus();
};
