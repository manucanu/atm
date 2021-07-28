//   const deposit_btn = document.getElementById('deposit-btn');
//   deposit_btn.addEventListener('click', function(){

//       const depositStringToInt = getInputNumb("deposit-amount");

//       updateSpanTest("current-deposit", depositStringToInt);
//       updateSpanTest("current-balance", depositStringToInt);

//       document.getElementById('deposit-amount').value = "";

//   })
// document.querySelector(".withdraw-btn").setAttribute("disable","disable");
// var valueCount
// document.querySelector(".deposit-btn").addEventListener("onclick",function(){
//     valueCount = document.getElementById("submit-area").value;
//     valueCount++;
//     document.getElementById("submit-area").value = valueCount;
// })
// document.querySelector(".withdraw-btn").addEventListener("onclick",function(){
//     valueCount = document.getElementById("submit-area").value;
//     valueCount++;
//     document.getElementById("submit-area").value = valueCount;
//     if (valueCount===1){
//         document.querySelector(".deposit-btn").setAttribute("deposit-btn","deposit-btn")
//     }
// })

let ACCOUNT_BALANCE = 0

   const withdraw_btn = document.getElementById('withdraw-btn');
   withdraw_btn.addEventListener('click', function(){
      const withdrawNumb = getInputNumb("withdraw-amount");

      updateSpanTest("current-withdraw", withdrawNumb);
      updateSpanTest("current-balance", -1 * withdrawNumb);
      document.getElementById('withdraw-amount').value = "";
  })

  function getInputNumb(idName){
      const amount = document.getElementById(idName).value;
      const amountNumber = parseFloat(amount);
      return amountNumber;
  }

  function updateSpanTest(idName, addedNumber){
      //x1.1 updating balance the same way
      const current = document.getElementById(idName).innerText;
      const currentStringToInt = parseFloat(current);

      const total = currentStringToInt + addedNumber;

      //x1.2 setting this value in balance
      document.getElementById(idName).innerText = total;
  }

  
