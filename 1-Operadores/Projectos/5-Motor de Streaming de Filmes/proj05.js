// 1. Dados da Conta do Utilizador
const tipoPlano = "Premium" // Planos existentes: "Basic", "Standard", "Premium"
const idadeUtizador = 16;
const generoFavorito = "Ação"

// 2. Dados do Filme Selecionado
const classicacaoEtariaFilme = 18; // Proibido para menores de 18 anos
const generoFilme = "Ação";

// O sistema verifica se o plano dá direito à qualidade máxima
const libertar4K = tipoPlano === "Premium";

// O sistema checa se o utilizador é menor do que a idade exigida pelo filme
const acessoBloqueado = idadeUtizador <=  classicacaoEtariaFilme;

// O sistema cruza o gosto do utilizador com a permissão de acesso
const recomentarFilme = (generoFilme === generoFavorito) && !acessoBloqueado

// Mensagem que o sistema gera para a interface
const mensagemHome = recomentarFilme ? "Porque assistiu a Ação... 🔥" :  "Descubra novas opções! 🍿";