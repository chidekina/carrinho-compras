let totalGeral;
limpar();


function adicionar(){

    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let carrinho = document.getElementById('lista-produtos');
    let nomeProduto = produto.split('-')[0]
    let valorUnitario = produto.split('R$')[1];
    let preco = valorUnitario * quantidade;
    let campoValorTotal = document.getElementById('valor-total');
    preco = valorUnitario * quantidade;
    
    // alert(`O produto selecionado foi ${descricaoProduto(adicionarProduto,'produto')} com preco de ${descricaoProduto(adicionarProduto,'preco')}`)

    if (quantidade == ''){
        alert('Favor inserir quantidade');
    }

    else{
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>`;
        totalGeral += preco;
        campoValorTotal.textContent = `R$ ${totalGeral}`
    }

    document.getElementById('quantidade').value = null;
    
}   

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0'
}
