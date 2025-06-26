let url = "https://dummyjson.com/users";
let result=async ()=>{
try{
    let res=await fetch(url);
    let data=await res.json();
    let result=await data.users.filter(user=>user.id>29).map(user=>user.id)
    console.log(result);
}catch(error){
  console.error("the error is"+error);
}
  }
 result();