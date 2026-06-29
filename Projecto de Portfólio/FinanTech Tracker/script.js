// 1. Selecionando os elementos que vamos precisar manipular
const form = document.querySelector("#transaction-form");
const inputdescription = document.querySelector("#description");
const inputAmount = document.querySelector("#amount");
const transactionContainer = document.querySelector("#transaction-container");
let currentFilter = 'all'; // Pode ser 'all', 'incomes' ou 'expenses'

// Selecionando os cartões de exibição
const incomeDiplay = document.querySelector("#income-display");
const expenseDisplay = document.querySelector("#expense-display");
const totalDisplay = document.querySelector("#total-display");

// 2. Tenta puxar os dados do LocalStorage; se não existirem, começa vazio (base de dados permanente)
const localStorageTransactions = JSON.parse(localStorage.getItem('transantions'));
let transantions = localStorage.getItem('transantions') !== null ? localStorageTransactions : [];

// 3. Função para adicionar uma transação na tela
function addTransactionIntoDom(transaction) {
    const operador = transaction.amount < 0 ? "-" : "+";
    const valorAbsoluto = Math.abs(transaction.amount);
    const linha = document.createElement("tr");
    const corTexto = transaction.amount < 0 ? "var(--saida)" : "var(--entrada)";

    linha.innerHTML = `
        <td>${transaction.description}</td>
        <td style="color: ${corTexto}; font-weight: bold;">
            ${operador} ${valorAbsoluto.toLocaleString("pt-AO", {style:"currency", currency: "AOA"})}
        </td>
        <td>
            <button class="delete-btn" data-id="${transaction.id}" style="cursor:pointer; border:none; background:none;">❌</button>
        </td>
    `;

    transactionContainer.appendChild(linha);
}

// 4. Função para atualizar os dados guardados no LocalStorage do navegador
function updateLocalStorage() {
    localStorage.setItem('transantions', JSON.stringify(transantions));
}

// 5. Função para calcular os saldos e atualizar os cartões do topo
function updateBalanceValues() {
    const transactionAmounts = transantions.map(transaction => transaction.amount);

    const income = transactionAmounts
        .filter(value => value > 0)
        .reduce((accumulator, value) => accumulator + value, 0);

    const expense = transactionAmounts
        .filter(value => value < 0)
        .reduce((accumulator, value) => accumulator + value, 0);

    const total = transactionAmounts.reduce((accumulator, value) => accumulator + value, 0);

    incomeDiplay.textContent = income.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' });
    expenseDisplay.textContent = expense.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' });
    totalDisplay.textContent = total.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' });
}

// Função que inicializa o app de forma coordenada
function init() {
    transactionContainer.innerHTML = ""; 
    
    // 🌟 FILTRAGEM DINÂMICA ANTES DE DESENHAR NA TELA
    let filteredTransactions = transantions;
    
    if (currentFilter === 'incomes') {
        filteredTransactions = transantions.filter(t => t.amount > 0);
    } else if (currentFilter === 'expenses') {
        filteredTransactions = transantions.filter(t => t.amount < 0);
    }
    
    // Desenha apenas as transações que passaram pelo filtro selecionado
    filteredTransactions.forEach(addTransactionIntoDom); 
    
    updateBalanceValues(); 
    updateLocalStorage(); 
}

// Executa o início do app
init();

// 6. Função para capturar o envio do formulário (Adicionar Transação)
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const descriptionText = inputdescription.value.trim();
    const valorLimpo = inputAmount.value.replace(/[\.\s,]/g, '');
    const amountNumber = Number(valorLimpo);

    // 🌟 NOVA VALIDAÇÃO: Verifica se a descrição contém pelo menos algumas letras
    // Esta regra garante que o texto tenha letras (maiúsculas ou minúsculas) e espaços, rejeitando se for só números.
    const apenasLetras = /^[A-Za-çõesa-zÁ-ú ]+$/;

    if (descriptionText === '' || !apenasLetras.test(descriptionText)) {
        alert('Por favor, introduza uma descrição válida (apenas letras)!');
        return;
    }

    if (inputAmount.value.trim() === '' || isNaN(amountNumber)) {
        alert('Por favor, preencha o valor corretamente!');
        return;
    }

    const newTransaction = {
        id: Math.floor(Math.random() * 10000),
        description: descriptionText,
        amount: amountNumber
    };

    transantions.push(newTransaction);
    init();

    inputdescription.value = '';
    inputAmount.value = '';
});


// 7. Função para escutar cliques de exclusão na tabela (Botão X)
transactionContainer.addEventListener('click', function(event) {
    const clickedElement = event.target;
    
    if (clickedElement.classList.contains('delete-btn')) {
        // 🌟 NOVA ADIÇÃO: Pergunta ao utilizador se ele tem a certeza
        const temCerteza = confirm('Tem a certeza que deseja apagar esta transação?');
        
        // Se o utilizador clicar em "Cancelar", o 'temCerteza' será falso, 
        // e o 'return' para o código imediatamente, sem apagar nada!
        if (!temCerteza) {
            return;
        }

        // Se ele clicou em "OK", o código continua normalmente e apaga:
        const idParaRemover = Number(clickedElement.getAttribute('data-id'));
        
        transantions = transantions.filter(transaction => transaction.id !== idParaRemover);
        
        init();
    }
});

// 8. Máscara para formatar o valor com pontos enquanto o usuário digita
inputAmount.addEventListener('input', function(event) {
    let value = event.target.value;

    value = value.replace(/[^\d-]/g, '');

    const isNegative = value.startsWith('-');
    value = value.replace(/-/g, ''); 
    
    if (value) {
        value = Number(value).toLocaleString('pt-PT'); 
    }

    event.target.value = isNegative ? '-' + value : value;
});

// 9. Controle dos botões de Filtro do Histórico
document.querySelector('.filter-container').addEventListener('click', function(event) {
    const clickedBtn = event.target;
    
    // Garante que o usuário clicou em um botão e não no espaço entre eles
    if (clickedBtn.classList.contains('filter-btn')) {
        
        // Remove a cor de ativo de todos os botões de filtro
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.style.background = 'white';
            btn.style.color = '#333';
            btn.style.borderColor = '#ccc';
            btn.style.fontWeight = 'normal';
        });

        // Aplica a cor azul de ativo apenas no botão que foi clicado
        clickedBtn.style.background = 'var(--destaque)';
        clickedBtn.style.color = 'white';
        clickedBtn.style.borderColor = 'var(--destaque)';
        clickedBtn.style.fontWeight = 'bold';

        // Altera o filtro atual dependendo do botão clicado
        if (clickedBtn.id === 'filter-all') currentFilter = 'all';
        if (clickedBtn.id === 'filter-incomes') currentFilter = 'incomes';
        if (clickedBtn.id === 'filter-expenses') currentFilter = 'expenses';

        // Executa o init para atualizar apenas as linhas da tabela
        init();
    }
});