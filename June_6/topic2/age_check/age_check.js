let readline=require("readline");
let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
rl.question("Enter your age:",(age)=>{
  (age>=18 && age<=120)?console.log("you are adult")
  :console.log( "you are child");
  rl.close();
})