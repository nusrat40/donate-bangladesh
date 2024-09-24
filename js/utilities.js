function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValuById(id){
  const textValue=document.getElementById(id).innerText;
  const textNumber=parseFloat(textValue);
  return textNumber;
}

// function showSectionById(id){
//     document.getElementById("add-money-form").classList.add("hidden");
//     document.getElementById("cash-out-form").classList.add("hidden");
//     document.getElementById("transaction-form").classList.add("hidden");

//     //show the form which is clicked
//     document.getElementById(id).classList.remove("hidden");

// }

