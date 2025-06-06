// Console-based Quiz (input/output)
let readline=require("readline");

let rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

rl.question("Can you become sucessful developer in 3 months yes or no: ",(ans)=>{
  // if(typeof(ans)==Number){]
  ans=ans.toLowerCase();
  if(ans=="no"){
    console.log(`You can do it try it`);
  }
  else if(ans=="yes"){
    console.log(`Yes you can do it continue with your task and learn like fun`);
  }
  else{
    console.log(`Enter the answer yes and no only..`);
  }
  rl.close();
})