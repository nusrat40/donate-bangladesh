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
   else{
    my_modal_1.showModal();
   }

   const newBalance = donatedMoney + addMoney;
   document.getElementById("donated-money").innerText=newBalance;

   const newAccountBalance = balance - addMoney;
   document.getElementById("account-balance").innerText=newAccountBalance;

   document.getElementById("input-add-money").value='';



   //add to transaction
   const place =document.getElementById("place-noakhali").innerText;
   const now = new Date();
      const options = {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'long'
      };

      const bangladeshDate = now.toLocaleString('en-US', options);
   const div = document.createElement("div");
   div.classList.add("border-2");
   div.classList.add("p-8");
   div.classList.add("rounded-lg");
   div.innerHTML=`
   <p>${addMoney} Taka is ${place}</p>
   <p>Date: ${bangladeshDate}</p>
   `;
   document.getElementById("history-container").appendChild(div);
       

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
   else{
    my_modal_1.showModal();
   }

   const newBalance = donatedMoney + addMoney;
   document.getElementById("donated-money2").innerText=newBalance;

   const newAccountBalance = balance - addMoney;
   document.getElementById("account-balance").innerText=newAccountBalance;

   document.getElementById("input-add-money2").value='';

       
   //add to transaction
   const place =document.getElementById("place-feni").innerText;
   const now = new Date();
      const options = {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'long'
      };

      const bangladeshDate = now.toLocaleString('en-US', options);
   const div = document.createElement("div");
   div.classList.add("border-2");
   div.classList.add("p-8");
   div.classList.add("rounded-lg");
   div.innerHTML=`
   <p>${addMoney} Taka is ${place}</p>
   <p>Date: ${bangladeshDate}</p>
   `;
   document.getElementById("history-container").appendChild(div);
       

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
   else{
    my_modal_1.showModal();
   }

   const newBalance = donatedMoney + addMoney;
   document.getElementById("donated-money3").innerText=newBalance;

   const newAccountBalance = balance - addMoney;
   document.getElementById("account-balance").innerText=newAccountBalance;

   document.getElementById("input-add-money3").value='';

     
   //add to transaction
   const place =document.getElementById("quota-movement").innerText;
   const now = new Date();
      const options = {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'long'
      };

      const bangladeshDate = now.toLocaleString('en-US', options);
   const div = document.createElement("div");
   div.classList.add("border-2");
   div.classList.add("p-8");
   div.classList.add("rounded-lg");
   div.innerHTML=`
   <p>${addMoney} Taka is ${place}</p>
   <p>Date: ${bangladeshDate}</p>
   `;
   document.getElementById("history-container").appendChild(div);
       

})


