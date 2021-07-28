

let actBalance = 0

const depositInput = document.getElementById("deposit-amount")
const withDrawInput = document.getElementById("withdraw-amount")
const depositBtn = document.getElementById("deposit-btn")
const withDrawBtn = document.getElementById("withdraw-btn")
const currentBalance = document.getElementById("current-balance")
const currentDepositSpan = document.getElementById("current-deposit")
const currentWithdrawSpan = document.getElementById("current-withdraw")
const code = document.getElementById("code")
const body = document.getElementById("account-area")
const form = document.getElementById("startForm")

code.addEventListener("click", () => {
    form.style.display = "none"
    body.style.display = "block"
})


depositBtn.addEventListener("click", (e) => {
    // get value of input
    const depositAmt = depositInput.value

    // update deposit span
    currentDepositSpan.innerText = depositInput.value
    // set account balance to new deposit
    actBalance = depositAmt
    // update html dom
    currentBalance.innerText = actBalance
})

withDrawBtn.addEventListener("click", (e) => {
    // get value for withdrawal
    const withDrawAmt = withDrawInput.value
    // update withdrawal span
    currentWithdrawSpan.innerText = withDrawInput.value
    // calculate new amount in balance
    newActBalance = actBalance - withDrawAmt
    // reset account balance
    actBalance = newActBalance
    // display updated account balance in html
    currentBalance.innerText = actBalance

})
