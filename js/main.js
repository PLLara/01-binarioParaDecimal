// Pega todos os elementos
const DOM_nextButton = document.getElementById("nextButton")
const DOM_binaryField = document.getElementById("binaryField")
const DOM_decimalField = document.getElementById("decimalField")

// Verifica se todos os elementos foram capturados
let x = [
    DOM_nextButton,
    DOM_binaryField,
    DOM_decimalField
].forEach(element =>{
    console.log(element)
})

DOM_nextButton.onclick = (event)=>{
    event.preventDefault();
    var inputBinary = DOM_binaryField.value
    let totalValue = 0
    let binaryPosition = inputBinary.length-1

    let base = 2
    for (let x = 0; x < inputBinary.length; x++)
    {
        let tempValue = (base**(binaryPosition-x))*inputBinary[x]
        totalValue+=tempValue
    }
    document.getElementById("decimalField").value = totalValue
}

