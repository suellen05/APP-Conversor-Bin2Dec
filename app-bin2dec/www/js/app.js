let salario = document.querySelector('#salario');


document.querySelector('#btn-calcular').addEventListener('click', () => {
    varejo()
   
    salario.value = ''
    
})

const varejo = () => {
    let valor = salario.value * 0.5   
    document.querySelector('#varejo').innerHTML = `<p class="text-center">R$${valor}</p>`
}




