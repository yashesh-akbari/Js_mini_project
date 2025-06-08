 let colorChange = (value) => {
        localStorage.setItem("storeColor",value);
        let colorValue=localStorage.getItem("storeColor");
        document.getElementById("whole").style.backgroundColor =colorValue;
      };

window.onload=()=>{
  let savedColor=localStorage.getItem("storeColor"
  );
  if(savedColor){
    document.getElementById("whole").style.backgroundColor=savedColor;
  }
}
