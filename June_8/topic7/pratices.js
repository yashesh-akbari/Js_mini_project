let obj={
  name:"yashesh",
  age:21,
}
//save in localstorage and in form of string
localStorage.setItem("user",JSON.stringify(obj));

//retrieve and parse the back to stirng to object
let user=JSON.parse(localStorage.getItem("user"));
console.log(user.name);