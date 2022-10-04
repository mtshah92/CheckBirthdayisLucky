const birthDay = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky-no");
const checkBtn = document.querySelector("#check-btn");
const outputtxt=document.querySelector("#text");

function checkBirthdayIsLucky() {
  const dob= birthday.value;
  const sum=calculateSum(dob);
  if(sum&&dob)
compareValues(sum,luckyNumber.value)
  else
  outputtxt.innerText="Please Enter both fields";
  
  
}

function compareValues(sum,luckynumber){
  if(sum%luckynumber===0){
    outputtxt.innerText="Your Birthday is Lucky";
  }
  else{
    outputtxt.innerText="Not Lucky";
  }
}

function calculateSum(dob) {
  dob=dob.replaceAll("-",0);
  let sum=0;
  for(let i=0;i<dob.length;i++){
    sum=sum+Number(dob.charAt(i))
  }
  return sum; 
  
}

checkBtn.addEventListener('click', checkBirthdayIsLucky);