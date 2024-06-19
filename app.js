let now = new Date();
let userDate = document.querySelectorAll(".date")[0];
let userMonth = document.querySelectorAll(".month")[0];
let userYear = document.querySelectorAll(".year")[0];

let agePrint = document.querySelectorAll(".ageprint")[0];

function calculateAge(){
    let date = userDate.value;
    let month = userMonth.value;
    let year = userYear.value;
let dob = new Date(`${year}-${month}-${date}`);
let ageInMS = now-dob;
let ageINYear = Math.floor(ageInMS/31556952000);
agePrint.innerHTML= `<p>Your Age is : ${ageINYear}</p>`
}

function reset(){
    agePrint.innerHTML="";
    userDate.value="";
    userMonth.value="";
    userYear.value="";
}