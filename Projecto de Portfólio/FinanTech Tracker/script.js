// 1. Selecionando os elementos que vamos precisar manipular
const form = document.querySelector("#transaction-form");
const inputdescription = document.querySelector("#description");
const inputAmount = document.querySelector("#amount");
// CORREÇÃO 1: Adicionado o hífen para bater exatamente com o ID do seu HTML
const transactionContainer = document.querySelector("#transaction-container");

// Selecionando os cartões de exibição
const incomeDiplay = document.querySelector("#income-display");
const expenseDisplay = document.querySelector("#expense-display");
const totalDisplay = document.querySelector("#total-display");

// 2. Nossa "Base de Dados" fictícia (Array contendo Objetos)
let transantions = [
    {id: 1, description: "Salário", amount: 25000},
    {id: 2, description: "Supermercado", amount: -45000},
    {id: 3, description: "Freelance internet", amount: 80000}
];

// 3. Função para adicionar uma transação na tela
function addTransactionIntoDom(transaction) {
    // Descobre se é entrada ou saída para aplicar a cor certa depois
    const operador = transaction.amount < 0 ? "-" : "+";

    // Pega o valor absoluto do número (transforma -45000 em 45000) para o sinal não aparecer duplicado
    const valorAbsoluto = Math.abs(transaction.amount);

    // Cria uma linha de tabela (<tr>) vazia na memória do computador
    const linha = document.createElement("tr");

    // CORREÇÃO 2: Adicionado "--" dentro do var() para puxar sua cor do CSS corretamente
    const corTexto = transaction.amount < 0 ? "var(--saida)" : "var(--entrada)";

    // CORREÇÃO 3: Ajustado o fechamento das tags <td> corretamente
    linha.innerHTML = `
        <td>${transaction.description}</td>
        <td style="color: ${corTexto}; font-weight: bold;">
            ${operador} ${valorAbsoluto.toLocaleString("pt-AO", {style:"currency", currency: "AOA"})}
        </td>
        <td>
            <button class="delete-btn" data-id="${transaction.id}" style="cursor:pointer; border:none; background:none;">❌</button>
        </td>
    `;

    // Coloca a linha pronta dentro do nosso container lá no HTML
    transactionContainer.appendChild(linha);
}

function init() {
    transactionContainer.innerHTML = ""; // Limpa o container para não duplicar dados
    transantions.forEach(addTransactionIntoDom); // Passa por cada item da lista rodando a função
    updateBalanceValues(); // 🌟 NOVA LINHA: Roda a função de calcular os saldos!
}

// 5. Função para calcular os saldos e atualizar os cartões do topo
function updateBalanceValues() {
    // Cria um array contendo apenas os números dos valores. Ex: [25000, -45000, 80000]
    const transactionAmounts = transantions.map(transaction => transaction.amount);

    // Filtra apenas os números maiores que 0 (entradas) e soma todos eles
    const income = transactionAmounts
        .filter(value => value > 0)
        .reduce((accumulator, value) => accumulator + value, 0);

    // 🌟 AQUI ESTÁ A PARTE QUE TINHA SIDO APAGADA:
    // Filtra apenas os números menores que 0 (saídas) e soma todos eles
    const expense = transactionAmounts
        .filter(value => value < 0)
        .reduce((accumulator, value) => accumulator + value, 0);

    // Soma tudo para obter o saldo final acumulado
    const total = transactionAmounts.reduce((accumulator, value) => accumulator + value, 0);

    // Atualiza os textos dos cartões na tela usando os elementos selecionados
    incomeDiplay.textContent = income.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' });
    expenseDisplay.textContent = expense.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' });
    totalDisplay.textContent = total.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' });
}

// Executa o início do app
init();

// 6. Função para capturar o envio do formulário
form.addEventListener('submit', function(event) {
    // Evita que a página recarregue (comportamento padrão do formulário)
    event.preventDefault();

    // Pega os valores que o usuário digitou nos campos inputs
    const descriptionText = inputdescription.value.trim();
    const amountNumber = Number(inputAmount.value);

    // Validação simples: garante que os campos não estão vazios
    if (descriptionText === '' || isNaN(amountNumber)) {
        alert('Por favor, preencha todos os campos corretamente!');
        return;
    }

    // Cria um novo objeto de transação com um ID único baseado no tempo atual
    const newTransaction = {
        id: Math.floor(Math.random() * 1000),
        description: descriptionText,
        amount: amountNumber
    };

    // Adiciona a nova transação no nosso array de transações
    transantions.push(newTransaction);

    // Atualiza a tela inteira (desenha a nova linha e refaz as somas do topo)
    init();

    // Limpa os campos do formulário para o usuário digitar a próxima
    inputdescription.value = '';
    inputAmount.value = '';
});

// 7. Função para escutar cliques de exclusão na tabela
transactionContainer.addEventListener('click', function(event) {
    // Verifica se o elemento clicado foi o botão do X (ou está dentro dele)
    const clickedElement = event.target;
    
    if (clickedElement.classList.contains('delete-btn')) {
        // Pega o ID que guardamos no botão e converte para número
        const idParaRemover = Number(clickedElement.getAttribute('data-id'));
        
        // Filtra a nossa lista, mantendo apenas as transações que têm o ID DIFERENTE do que queremos apagar
        transantions = transantions.filter(transaction => transaction.id !== idParaRemover);
        
        // Atualiza a tela inteira com a lista nova
        init();
    }
});