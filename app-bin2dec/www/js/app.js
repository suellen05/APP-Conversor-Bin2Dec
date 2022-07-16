let produto = document.querySelector('#produto');


document.querySelector('#btn-calcular').addEventListener('click', () => {
    varejo()
   
    produto.value = ''
    
})

const varejo = () => {
    let valor = produto.value * 0.5   
    document.querySelector('#varejo').innerHTML = `<p class="text-center">Peças = ${valor}</p>`
    
}




