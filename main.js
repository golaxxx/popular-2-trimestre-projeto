const caixaPrincipal = document.querySelector(".Caixa-principal");
const caixaPerguntas = document.querySelector(".Caixa-perguntas");
const caixaAlternativas =
document.querySelector(".Caixa-alternativas");
const caixaResultado = document.querySelector(".Caixa-Resultado");
const textoResultado = document.querySelector(".Texto-resultado");

const perguntas = [
{
    enunciado: "nosso texto",
    caixaAlternativas: [
    {
    texto: "Não é um esporte.",
    afirmacao: "afirmacao"
    },
    {
    texto: "Sim é um espote.",
    afirmacao: "afirmacao"
    }
    ]
    },
    {
        enunciado: "nosso texto",
        alternativa: [
        {
        texto: "Não é um esporte.",
        afirmacao: "afirmacao"
        },
        {
        texto: "Sim é um espote.",
        afirmacao: "afirmacao"
        }
        ]
        },
        {
            enunciado: "nosso texto",
            alternativa: [
            {
            texto: "Não é um esporte.",
            afirmacao: "afirmacao"
            },
            {
            texto: "Sim é um espote.",
            afirmacao: "afirmacao"
            }
            ]
            },
            {
                enunciado: "nosso texto",
                alternativa: [
                {
                texto: "Não é um esporte.",
                afirmacao: "afirmacao"
                },
                {
                texto: "Sim é um espote.",
                afirmacao: "afirmacao"
                }
                ]
                },
        ]
let atual = 0;
let perguntaAtual;
let historiaFinal = "dasgvdagsdf";
function mostraPergunta () {
if(atual >= perguntas. length) {
mostraResultado();
return;
}
perguntaAtual = perguntas [atual];
caixaPerguntas. textContent = perguntaAtual. enunciado;
caixaAlternativas. textContent = " ";
mostraAlternativas ();
}
function mostraAlternativas(){
for (const alternativa of perguntaAtual. alternativas){
const botaoAlternativas = document. createElement ("button") ;
botaoAlternativas. textContent = alternativa.texto;
botaoAlternativas.addEventListener ("click", () => respostaSelecionada(alternativa))
caixaAlternativas.appendChild(botaoAlternativas);}
}
function respostaSelecionada (opcaoSelecionada){
const afirmacoes = opcaoselecionada.afirmacoes;
historiaFinal += afirmacoes +"";
atual++;
mostraPergunta();
}
function mostraResultado()
caixaPerguntas. textContent = "jogos ou games são esportivos?"
textoResultado. textContent = historiaFinal;
caixaAlternativas.textContent = "";
mostraPergunta ();
