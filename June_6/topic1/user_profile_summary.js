// 💡 What you'll build:
// A simple JS program that:
// Stores user info (name, age, city)
// Prints out a message like:
// "Hi, my name is Yashesh. I am 22 years old and I live in Mumbai."

let readline=require("readline");
let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
rl.question('Enter Your Name: ',(name)=>{
  rl.question('Enter your age: ',(age)=>{
    rl.question(`Enter Your city: `,(city)=>{
      console.log("Hi, my name is "+name+". I am "+age+" years old and I live in "+city);
      rl.close();
    })
  })
})