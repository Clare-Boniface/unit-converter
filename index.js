const convertBtn = document.getElementById("convert-btn")
const inputNumber = document.getElementById("input-number")
const lengthText = document.getElementById("length-text")
const volumeText = document.getElementById("volume-text")
const massText = document.getElementById("mass-text")
const message = document.getElementById("message")
const inputContainer = document.getElementById("input-container")

inputNumber.value = 0 

convertBtn.addEventListener("click", render)

inputContainer.addEventListener("click", function(){
    inputNumber.value = " "   
})

function convertUnit(unitOne, unitTwo, conversion){
    if (inputNumber.value > 0 && inputNumber.value <= 999) {
        inputNumber.classList.remove("red-border")
        message.textContent = " "
    let sumMetric = (inputNumber.value * conversion).toFixed(3)
    let sumImperial = (inputNumber.value / conversion).toFixed(3)
    return `${inputNumber.value} ${unitOne} = ${sumMetric} ${unitTwo} | ${inputNumber.value} ${unitTwo} = ${sumImperial} ${unitOne}`
    render()
} else {
    message.textContent = "Please enter a number between 1 and 999"
    inputNumber.classList.add("red-border")
    message.classList.add("italic-text")
}}

function render(){
    lengthText.textContent = convertUnit("metres", "feet", 3.281)
    volumeText.textContent = convertUnit("litres", "gallons", 0.264)
    massText.textContent = convertUnit("kilos", "pounds", 2.204)   
}

