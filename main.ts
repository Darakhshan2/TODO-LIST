import inquirer from "inquirer"

let todos = [ ];

let condition:boolean= true;

while(condition)
{let addTask = await inquirer.prompt([
    {
  name : "Todos",
  type : "input",
  message : "What you want to add in your todos?",
},
{
    name :"addmore",
    type :"confirm",
    message :"Do you want to add something else",
    default :"false",
},
]);

todos.push(addTask.Todos);
condition = addTask.addmore

console.log(todos);
}
