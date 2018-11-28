var strings = [];
var response = prompt("what would you like to do?");

while (response.indexOf("quit") === -1){

  if(response.indexOf("new") != -1){
    addToDo();
  }

  else if (response.indexOf("list") != -1) {
    listToDos();
  }

  else if (response.indexOf("del") != -1) {
    deleteToDo();
  }
  response = prompt("what would you like to do?");
}

console.log("you quit the app");

function addToDo(){
  var tempAdd = prompt("What to do are you adding?");
  strings.push(tempAdd);
  console.log("Added Todo");
}

function deleteToDo(){
  var delNum = prompt("What todo number do you want to delete?");
  if(delNum >= 0 && delNum < strings.length){
    strings.splice(delNum, 1);
    console.log("Deleted Todo");
  }
  else{
    alert("That number isn' on the list");
  }
}

function listToDos(){
  // for (var i = 0; i < strings.length; i++) {
  //   console.log(strings[i]);
  // }
  console.log("******");
  strings.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("******");
}
