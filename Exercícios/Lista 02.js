//Primeiramente, instale o node.js, logo após a instalação, execute o comando "npm install prompt-sync" no terminal.

const prompt = require('prompt-sync')()

//   1. Acessando Propriedades de Objetos
// Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Preto"
  }
  
  for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`)
  }

console.log("-----------------------------------------------------------------------------------------------")

//  2. Verificando Propriedades
// Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia"
  };
  
  let temEditora = false
  
  for (let propriedade in livro) {
    if (propriedade === "editora") {
      temEditora = true
      break
    }
  }
  
  if (!temEditora) {
    livro.editora = "HarperCollins"
  }
  
  console.log(livro)
  
  console.log("-----------------------------------------------------------------------------------------------")

//  3. Filtrando Propriedades de Objetos
// Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

function filtrarPropriedades(produto, valorEspecifico) {
    let novoObjeto = {}
    
    for (let propriedade in produto) {
        if (produto[propriedade] > valorEspecifico) {
            novoObjeto[propriedade] = produto[propriedade]
        }
    }
    
    return novoObjeto;
}

let produto = {
    preco: 150,
    estoque: 20,
    desconto: 10,
    rating: 4.5
}

let valorEspecifico = prompt("Digite o valor específico para filtrar: ")

let resultado = filtrarPropriedades(produto, valorEspecifico)
console.log("Propriedades filtradas:", resultado)

console.log("-----------------------------------------------------------------------------------------------")

//  4. Iterando Sobre Arrays de Objetos
// Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.


let pessoas = [
    { nome: "Jaques", idade: 25, cidade: "São Paulo" },
    { nome: "Edu", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Codifica", idade: 22, cidade: "Belo Horizonte" },
    { nome: "Hyago", idade: 27, cidade: "Curitiba" }
]

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
}

console.log("-----------------------------------------------------------------------------------------------")

//  5. Calculando Valores em Arrays de Objetos
// Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

let alunos = [
    { nome: "Jaques", nota1: 8, nota2: 7 },
    { nome: "Edu", nota1: 9, nota2: 6 },
    { nome: "Codifica", nota1: 7, nota2: 5 },
    { nome: "Hyago", nota1: 10, nota2: 9 }
]

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`)
}

console.log("-----------------------------------------------------------------------------------------------")

//  6. Filtrando Arrays de Objetos
// Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let funcionarios = [
    { nome: "Jaques", cargo: "Gerente", salario: 5000 },
    { nome: "Edu", cargo: "Desenvolvedora", salario: 4000 },
    { nome: "Codifica", cargo: "Analista", salario: 3500 },
    { nome: "Hyago", cargo: "Designer", salario: 3200 },
    { nome: "Batman", cargo: "Estagiário", salario: 1500 }
]

let valorespec = prompt("Digite o valor mínimo de salário para filtrar: ")

console.log(`Funcionários com salário maior que ${valorespec}:`)
for (let funcionario of funcionarios) {
    if (funcionario.salario > valorespec) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`)
    }
}

console.log("-----------------------------------------------------------------------------------------------")

//  7. Modificando Objetos em um Array
// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let produtos = [
    { nome: "Celular", preco: 1500, desconto: 0 },
    { nome: "Notebook", preco: 3000, desconto: 0 },
    { nome: "Teclado", preco: 200, desconto: 0 },
    { nome: "Monitor", preco: 800, desconto: 0 }
]


produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.10
    let precoComDesconto = produto.preco - produto.desconto
    console.log(`Produto: ${produto.nome}, Preço original: R$${produto.preco.toFixed(2)}, Preço com desconto: R$${precoComDesconto.toFixed(2)}`)
})

console.log("-----------------------------------------------------------------------------------------------")

//  8. Criando Novos Arrays a Partir de Objetos
// Objetivo: Crie um array de objetos filmes, onde cada filme do batman tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

const filmesBatman = [
    { titulo: 'Batman Begins', diretor: 'Christopher Nolan', anoLancamento: 2005 },
    { titulo: 'The Dark Knight', diretor: 'Christopher Nolan', anoLancamento: 2008 },
    { titulo: 'The Dark Knight Rises', diretor: 'Christopher Nolan', anoLancamento: 2012 },
    { titulo: 'Batman VS Superman: Dawn of Justice', diretor: 'Zack Snyder', anoLancamento: 2016 },
    { titulo: 'The Batman', diretor: 'Matt Reeves', anoLancamento: 2022 }
];

const titulosFilmes = [];
filmesBatman.forEach(filme => {
    titulosFilmes.push(filme.titulo);
});

console.log(titulosFilmes);

console.log("-----------------------------------------------------------------------------------------------")

//  9. Contabilizando Elementos com uma Condição
// Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

const clientes = [
    { nome: 'Jaques', idade: 28, cidade: 'São Paulo' },
    { nome: 'Edu', idade: 34, cidade: 'Rio de Janeiro' },
    { nome: 'Codifica', idade: 45, cidade: 'Belo Horizonte' },
    { nome: 'Hyago', idade: 22, cidade: 'Curitiba' },
    { nome: 'Joelson', idade: 37, cidade: 'Fortaleza' }
];

let contagemMaisDe30 = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contagemMaisDe30++;
    }
});

console.log(`Número de clientes com mais de 30 anos: ${contagemMaisDe30}`);

console.log("-----------------------------------------------------------------------------------------------")

//  10. Criando Relatórios com Objetos e Arrays
// Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

const vendas = [
    { produto: 'Notebook', quantidade: 10, valor: 1500 },
    { produto: 'Smartphone', quantidade: 15, valor: 800 },
    { produto: 'Monitor', quantidade: 8, valor: 300 },
    { produto: 'Teclado', quantidade: 25, valor: 50 },
    { produto: 'Mouse', quantidade: 30, valor: 25 }
]

let valorTotalVendas = 0

vendas.forEach(venda => {
    valorTotalVendas += venda.quantidade * venda.valor
})

console.log(`Valor total de vendas: R$ ${valorTotalVendas}`)

console.log("-----------------------------------------------------------------------------------------------")

//  11. Agrupando Elementos com forEach
// Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

const pedidos = [
    { cliente: 'Jaques', produto: 'Notebook', quantidade: 2 },
    { cliente: 'Edu', produto: 'Smartphone', quantidade: 3 },
    { cliente: 'Codifica', produto: 'Teclado', quantidade: 1 },
    { cliente: 'Hyago', produto: 'Monitor', quantidade: 4 },
    { cliente: 'Joelson', produto: 'Notebook', quantidade: 1 },
    { cliente: 'Batman', produto: 'Mouse', quantidade: 2 }
]

const quantidadePorCliente = {}

pedidos.forEach(pedido => {
    if (quantidadePorCliente[pedido.cliente]) {
        quantidadePorCliente[pedido.cliente] += pedido.quantidade
    } else {
        quantidadePorCliente[pedido.cliente] = pedido.quantidade
    }
})

console.log(quantidadePorCliente)

console.log("-----------------------------------------------------------------------------------------------")

//  12. Atualizando um Array de Objetos
// Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
    { produto: 'Notebook', quantidade: 5, minimo: 10 },
    { produto: 'Smartphone', quantidade: 8, minimo: 15 },
    { produto: 'Monitor', quantidade: 12, minimo: 10 },
    { produto: 'Teclado', quantidade: 3, minimo: 5 },
    { produto: 'Mouse', quantidade: 7, minimo: 10 }
]

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2
    }
})

console.log(estoque)

console.log("-----------------------------------------------------------------------------------------------")

//  13. Implementando um Carrinho de Compras
// Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

const carrinho = {
    itens: [
        { nome: 'Notebook', quantidade: 1, precoUnitario: 1500 },
        { nome: 'Smartphone', quantidade: 2, precoUnitario: 800 },
        { nome: 'Monitor', quantidade: 1, precoUnitario: 300 },
        { nome: 'Teclado', quantidade: 3, precoUnitario: 50 },
        { nome: 'Mouse', quantidade: 1, precoUnitario: 25 }
    ]
}

let valorTotal = 0

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario
});

console.log(`Valor total do carrinho: R$ ${valorTotal}`)

console.log("-----------------------------------------------------------------------------------------------")

//  14. Manipulando Objetos Complexos
// Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

const empresa = {
    departamentos: [
        {
            nome: 'Recursos Humanos',
            funcionarios: [
                { nome: 'Edu', cargo: 'Gerente de RH' },
                { nome: 'Jaques', cargo: 'Analista de RH' }
            ]
        },
        {
            nome: 'Tecnologia',
            funcionarios: [
                { nome: 'Joelson', cargo: 'Desenvolvedor Frontend' },
                { nome: 'Hyago', cargo: 'Desenvolvedora Backend' },
                { nome: 'Batman', cargo: 'Analista de Sistemas' }
            ]
        },
        {
            nome: 'Marketing',
            funcionarios: [
                { nome: 'Codifica', cargo: 'Coordenadora de Marketing' },
                { nome: 'Flash', cargo: 'Analista de Marketing' }
            ]
        }
    ]
}

for (const departamento of empresa.departamentos) {
    console.log(`Departamento: ${departamento.nome}`);
    for (const funcionario of departamento.funcionarios) {
        console.log(`  Funcionário: ${funcionario.nome}`)
    }
}

console.log("-----------------------------------------------------------------------------------------------")

//  15. Filtrando e Somando Valores
// Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

const transacoes = [
    { tipo: 'entrada', valor: 1000 },
    { tipo: 'saída', valor: 200 },
    { tipo: 'entrada', valor: 1500 },
    { tipo: 'saída', valor: 300 },
    { tipo: 'entrada', valor: 500 }
]

let saldoFinal = 0

transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
        saldoFinal += transacao.valor
    } else if (transacao.tipo === 'saída') {
        saldoFinal -= transacao.valor
    }
})

console.log(`Saldo final: R$ ${saldoFinal}`)


console.log("Fim da lista")

