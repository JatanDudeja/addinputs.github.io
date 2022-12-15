function addInputs() {
    let newInput = document.createElement("input")
    newInput.setAttribute('type', 'text')
    newInput.setAttribute('class', 'blockLevel')
    newInput.setAttribute('id', 'ele')
    let form = document.getElementById('form')
    form.appendChild(newInput)


  
}


function delInputs(){
    let newInput = document.getElementById('ele')
    newInput.remove()
}