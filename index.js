console.log('Pass')

const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "var x = 5;",
      "variable x = 5;",
      "let x = 5;",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o resultado da expressão '2' + 2?",
    respostas: [
      "4",
      "22",
      "Erro",
    ],
    correta: 0
  },
  {
    pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
    respostas: [
      "console.out()",
      "print()",
      "console.log()",
    ],
    correta: 2
  },
  {
    pergunta: "Qual destes é um tipo de dados primitivo em JavaScript?",
    respostas: [
      "Array",
      "Object",
      "String",
    ],
    correta: 2
  },
  {
    pergunta: "O que o operador '===' faz em JavaScript?",
    respostas: [
      "Compara apenas os valores das variáveis",
      "Compara os valores e os tipos de dados das variáveis",
      "Atribui um valor a uma variável",
    ],
    correta: 1
  },
  {
    pergunta: "Como você inicia um comentário de uma linha em JavaScript?",
    respostas: [
      "//",
      "<!--",
      "/*",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do operador '&&' em JavaScript?",
    respostas: [
      "Operador lógico 'OU'",
      "Concatenação de strings",
      "Operador lógico 'E'",
    ],
    correta: 2
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "shift()",
      "splice()",
    ],
    correta: 0
  },
  {
    pergunta: "O que a função 'parseInt()' faz em JavaScript?",
    respostas: [
      "Converte uma string em um número inteiro",
      "Converte uma string em um número decimal",
      "Converte um número inteiro em uma string",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta de escrever um comentário de várias linhas em JavaScript?",
    respostas: [
      "// Este é um comentário de várias linhas",
      "<!-- Este é um comentário de várias linhas -->",
      "/* Este é um comentário de várias linhas */",
    ],
    correta: 2
  },
];


const quiz = document.querySelector('#quiz') 
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas){ 
  const quizItem = template.content.cloneNode(true) 
  quizItem.querySelector('h3').textContent = item.pergunta 

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
  quiz.appendChild(quizItem)
}