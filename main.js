const todoList = [
    { id: 1, title: "I finished the JavaScript, congratulations to me", date: "2024-12-10T14:30:00" },
    { id: 2, title: "The Node.js language is my game", date: "2024-12-10T14:30:00" },
  ];

class Task {
  constructor(id, title, date) {
    this.id = id;
    this.title = title;
    this.date = date;
}
}
class SpecialTask extends Task {
  constructor(id, title, date, priority) {
      super(id, title, date);
      this.priority = priority;
  }
}

function shallowCopy() {
  const shallow = todoList.slice();
  shallow[0].title = "I am about to start learning Node.js";
  shallow[0].date = "2024-12-14T18:30:00";
  console.log("todoList after Shallow Copy  modification:", todoList);
  

}

function deepCopy() {
  const deep = JSON.parse(JSON.stringify(todoList));
  deep[0].title = "I will not do anything";
  deep[0].date = "2024-12-14T20:30:00";
  console.log("todoList after deep Copy  modification:", todoList);
  
}
  

function addTodoItem(title, callback) {
  const id = todoList.length + 1;
  const date = new Date().toISOString();
  const newTask = new Task(id, title, date);
  todoList.push(newTask);

  if (callback) {
      callback(newTask);
  }
  displayTodoList();
}

addTodoItem("Learn the basics of Node.js ", (newTask) => {
  console.log("Callback after adding:", newTask);
});

function saveToServer(list) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("To-Do List saved to server"); 
      }, 2000);
  });
}

async function saveList() {
  try {
      const result = await saveToServer(todoList);
      console.log(result);
  } catch (error) {
      console.error("Error saving to server:", error);
  }
}

setInterval(() => {
  if (todoList.length > 0) {
      todoList.pop(); 
      displayTodoList(); 
  } else {
      console.log("We have no deleted items"); 
  }
}, 30000);

function addDescriptions() {
  todoList.forEach((item, index) => {
      item.description = `Description ${index + 1}`;
  });
}

function displayTodoList() {
  console.log("To-do list items:", todoList);
}