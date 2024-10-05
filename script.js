const tipAmnt=document.querySelector("#tip-amount")
const billAmount=document.querySelector("#bill-amount")


const calculate=document.querySelector("#calculate")
const output=document.querySelector("#total-bill")


calculate.addEventListener("click", function(){

if(billAmount.value==='' || tipAmnt.value===''){
    alert("Please enter both bill amount and tip amount")
    return
}
else if(billAmount.value<0 || tipAmnt.value<0){
    alert("Bill amount and tip amount should be positive numbers")
    return

}
else{
    const billAmountValue=parseFloat(billAmount.value)
    const tippercentvalue=parseFloat(tipAmnt.value)
    const tipAmount=billAmountValue*(tippercentvalue/100)
    const totalBill=billAmountValue+tipAmount
    output.textContent=totalBill
}

})