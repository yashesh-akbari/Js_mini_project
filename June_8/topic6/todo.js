let todos=[{
  completed:"true",
  id:"1"
},
{
  id:"2",
  completed:"false"
},
{
  id:"3",
  completed:"true"
}
]

let result=todos.filter(todo=>todo.completed==="true")
console.log(result);

let maps_result=todos.map(todo=>todo.id);
console.log(maps_result);