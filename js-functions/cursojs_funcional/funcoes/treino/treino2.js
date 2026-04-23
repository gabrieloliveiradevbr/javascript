const produtos = [
  { nome: 'Notebook', preco: 2500, categoria: 'eletronico' },
  { nome: 'Camisa', preco: 80, categoria: 'roupa' },
  { nome: 'Celular', preco: 1800, categoria: 'eletronico' },
  { nome: 'Calça', preco: 120, categoria: 'roupa' },
  { nome: 'Fone', preco: 200, categoria: 'eletronico' }
];

// 1️⃣ Filter > 1000 ✅
const maiorQue1000 = produto => produto.preco >= 1000;
console.log(produtos.filter(maiorQue1000));

// 2️⃣ Map nomes ✅
const nomeProdutos = produto => produto.nome;
console.log(produtos.map(nomeProdutos));

// 3️⃣ Reduce soma ✅
const somarTudo = (acc, produto) => acc + produto.preco;
console.log(produtos.reduce(somarTudo, 0));

// 4️⃣ Filter eletrônicos ✅
const eletronico = produto => produto.categoria === 'eletronico';
console.log(produtos.filter(eletronico));

// 5️⃣ Reduce roupas (somar preços) ✅
const roupa = (acc, produto) =>
  produto.categoria === 'roupa' ? acc + produto.preco : acc;
// ? = se , : = senao
console.log(produtos.reduce(roupa, 0));

// 6️⃣ Map frases ✅
const frase = produto => `${produto.nome} custa R$ ${produto.preco}`;
console.log(produtos.map(frase));


// 🔥 7️⃣ MAIS CARO (CORRIGIDO)
const maisCaro = (acc, produto) =>
  produto.preco > acc.preco ? produto : acc;
// ? = se , : = senao
console.log(produtos.reduce(maisCaro, produtos[0]));


// 🔥 8️⃣ MAIS BARATO (CORRIGIDO)
const maisBarato = (acc, produto) =>
  produto.preco < acc.preco ? produto : acc;
// ? = se , : = senao
console.log(produtos.reduce(maisBarato, produtos[0]));


// 🔥 9️⃣ ELETRÔNICOS COM REDUCE (CORRIGIDO)
const eletronicoReduce = (acc, produto) => {
  if (produto.categoria === 'eletronico') {
    acc.push(produto);
  }
  return acc;
};

console.log(produtos.reduce(eletronicoReduce, []));