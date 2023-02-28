function inteiroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const opcoes = ['Pedra', 'Papel', 'Tesoura']
const computador = inteiroAleatorio(0, 2)
const jogador = process.argv[2]
let resultado = ""

switch (jogador.toLowerCase()) {
    case 'pedra':
        computador === 2 ? resultado = "Você ganhou!"
            : computador === 1 ? resultado = "Você perdeu!" :
                resultado = "Empate!";
        break;
    case 'papel':
        computador === 0 ? resultado = "Você ganhou!"
            : computador === 2 ? resultado = "Você perdeu!" :
                resultado = "Empate!"
        break;
    case 'tesoura':
        computador === 1 ? resultado = "Você ganhou!"
            : computador === 0 ? resultado = "Você perdeu!" :
                resultado = "Empate!"
        break;
    default:
        console.log("Opção Inválida!")
}

if (resultado) {
    console.log(`Você escolheu ${jogador[0].toUpperCase() + jogador.slice(1)} e o computador escolheu ${opcoes[computador]}. ${resultado}`)
}
