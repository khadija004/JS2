//TASK1


// function Confirm() {
//     let text = "Seciminizi edin\nEither OK or Cancel.";
//     let body= document.getElementById('Confirm')
//     if (confirm(text) == true) {
//         body.style.backgroundColor='black'
//     } else {
//       body.style.backgroundColor='white'
//     }
//   }


//TASK2

function Check(){
    let age = prompt("Yasinizi daxil edin");
  if (age < 18) {
    document.getElementById("demo").innerHTML =
    "Yasiniz catmir";
  }
  else{
      document.getElementById('demo').innerHTML="Daxil oldunuz"
  }
}