//for card 1 
document.getElementById("btn-donate1").addEventListener("click",function(event){
    event.preventDefault();
    
   const addMoney = getInputFieldValueById("input-add-money");
   const donatedMoney=getTextFieldValuById("donated-money");
   const balance=getTextFieldValuById("account-balance");   

   if(isNaN(addMoney) || addMoney>balance || addMoney==="" ||addMoney<0)
   {
    alert("Please enter a valid number");
    return;
   }

   const newBalance = donatedMoney + addMoney;
   document.getElementById("donated-money").innerText=newBalance;

   const newAccountBalance = balance - addMoney;
   document.getElementById("account-balance").innerText=newAccountBalance;

   document.getElementById("input-add-money").value='';

   

       //add to transaction history
    //    const p=document.createElement("p");
    //    p.innerText=` Added: ${addMoney} tk, Balance: ${newBalance} `;
       
    //    document.getElementById("transaction-container").appendChild(p);
       

})



// for card 2 
document.getElementById("btn-donate2").addEventListener("click",function(event){
    event.preventDefault();
    
   const addMoney = getInputFieldValueById("input-add-money2");
   const donatedMoney=getTextFieldValuById("donated-money2");
   const balance=getTextFieldValuById("account-balance");

   if(isNaN(addMoney) || addMoney>balance || addMoney==="" ||addMoney<0)
   {
    alert("Please enter a valid number");
    return;
   }

   const newBalance = donatedMoney + addMoney;
   document.getElementById("donated-money2").innerText=newBalance;

   const newAccountBalance = balance - addMoney;
   document.getElementById("account-balance").innerText=newAccountBalance;

   document.getElementById("input-add-money2").value='';

       //add to transaction history
    //    const p=document.createElement("p");
    //    p.innerText=` Added: ${addMoney} tk, Balance: ${newBalance} `;
       
    //    document.getElementById("transaction-container").appendChild(p);
       

})

// for card 3
document.getElementById("btn-donate3").addEventListener("click",function(event){
    event.preventDefault();
    
   const addMoney = getInputFieldValueById("input-add-money3");
   const donatedMoney=getTextFieldValuById("donated-money3");
   const balance=getTextFieldValuById("account-balance");

   if(isNaN(addMoney) || addMoney>balance || addMoney==="" ||addMoney<0)
   {
    alert("Please enter a valid number");
    return;
   }

   const newBalance = donatedMoney + addMoney;
   document.getElementById("donated-money3").innerText=newBalance;

   const newAccountBalance = balance - addMoney;
   document.getElementById("account-balance").innerText=newAccountBalance;

   document.getElementById("input-add-money3").value='';

       //add to transaction history
    //    const p=document.createElement("p");
    //    p.innerText=` Added: ${addMoney} tk, Balance: ${newBalance} `;
       
    //    document.getElementById("transaction-container").appendChild(p);
       

})