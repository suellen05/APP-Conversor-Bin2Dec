let produto = document.querySelector('#produto');


document.querySelector('#btn-calcular').addEventListener('click', () => {
    varejo()
    tivoli()
   rioclaro()
   limeira()

    produto.value = ''
    
})

const varejo = () => {
    let valor = produto.value * 0.5   
    document.querySelector('#varejo').innerHTML = `<p class="text-center">Peças = ${valor}</p>`
    
}

const tivoli = () => {
    let valor = produto.value * 0.5   
    document.querySelector('#tivoli').innerHTML = `<p class="text-center">Peças = ${valor}</p>`
}

const rioclaro = () => {
    let valor = produto.value * 0.5   
    document.querySelector('#rioclaro').innerHTML = `<p class="text-center">Peças = ${valor}</p>`
}

const limeira = () => {
    let valor = produto.value * 0.5   
    document.querySelector('#limeira').innerHTML = `<p class="text-center">Peças = ${valor}</p>`
}



