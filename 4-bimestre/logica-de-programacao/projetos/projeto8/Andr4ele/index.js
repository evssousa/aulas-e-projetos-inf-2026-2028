
const prompt = require("prompt-sync")()

const precoUnitario = Number(prompt("Digite o preço unitário: "))
const quantidade = Number(prompt("Digite a quantidade: "))
const formaPagamento = prompt("Digite a forma de pagamento (pix, cartao ou dinheiro): ")

const calcularSubtotal = (preco, quantidade) => {
    return preco * quantidade;
};

function calcularFrete(subtotal) {
    if (subtotal >= 100) {
        return 0;
    } else {
        return 10;
    }
}

function calcularDesconto(subtotal, formaPagamento) {
    let percentual = 0;

    switch (formaPagamento) {
        case "pix":
            percentual = 5
            break;

        case "dinheiro":
            percentual = 5
            break;

        case "cartao":
            percentual = 0
            break;

        default:
            percentual = 0
    }

    return subtotal * percentual / 100
}

function calcularTotal(preco, quantidade, formaPagamento) {
    const subtotal = calcularSubtotal(preco, quantidade)
    const frete = calcularFrete(subtotal)
    const desconto = calcularDesconto(subtotal, formaPagamento)

    return subtotal - desconto + frete
}

const subtotal = calcularSubtotal(precoUnitario, quantidade)
const frete = calcularFrete(subtotal)
const desconto = calcularDesconto(subtotal, formaPagamento)
const total = calcularTotal(precoUnitario, quantidade, formaPagamento)

const resumo = `
===== RESUMO DO PEDIDO =====
Subtotal: R$ ${subtotal.toFixed(2)}
Frete: R$ ${frete.toFixed(2)}
Desconto: R$ ${desconto.toFixed(2)}
Total: R$ ${total.toFixed(2)}
============================
`

console.log(resumo)

module.exports = {
    precoUnitario,
    quantidade,
    formaPagamento,
    calcularSubtotal,
    calcularFrete,
    calcularDesconto,
    calcularTotal,
    subtotal,
    frete,
    desconto,
    total,
    resumo
}
