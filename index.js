/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281
const litreToGallon = 0.264
const kiloToPound = 2.204



const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const weightEl = document.getElementById("weight-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    baseValue = inputEl.value
   
    resultLength = baseValue * meterToFeet
    resultVolume = baseValue * litreToGallon
    resultWeight = baseValue * kiloToPound
    lengthResult = baseValue / meterToFeet
    volumeResult = baseValue / litreToGallon
    weightResult = baseValue / kiloToPound
    
    
    lengthEl.textContent = `${baseValue} meters = ${resultLength.toFixed(3)} feet   |  
    ${baseValue} feet = ${lengthResult.toFixed(3)} meters`
    volumeEl.textContent = `${baseValue} litres = ${resultVolume.toFixed(3)} gallons   |   
    ${baseValue} gallons = ${volumeResult.toFixed(3)} litres`
    weightEl.textContent = `${baseValue} kilos = ${resultWeight.toFixed(3)} pounds  |    
    ${baseValue} pounds = ${weightResult.toFixed(3)} kilos`
    
})