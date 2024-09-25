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

function showSectionById(id){
    document.getElementById("donation-form").classList.add("hidden");
    document.getElementById("history-form").classList.add("hidden");

    //show the form which is clicked
    document.getElementById(id).classList.remove("hidden");

}

function addButtonColor(id){
  document.getElementById("btn-donation").classList.remove("bg-[#B4F461]");
  document.getElementById("btn-history").classList.remove("bg-[#B4F461]");

  
  document.getElementById(id).classList.add("bg-[#B4F461]");

}

