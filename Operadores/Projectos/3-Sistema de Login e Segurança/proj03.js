// 1. Dados da tentativa de Login
const utizadorDigitado = "admin"
const senhaDigitada = "12345";
let tentativasErradas = 2;

// Dados corretos guardados no servidor
const utizadorCorreto = "admin";
const senhaCorreta = "12345";
const captchaPreenchido = true; // Aquela caixinha do "Não sou um robô"

// O sistema valida se os dados coincidem
const credenciaisValidas = (utizadorDigitado === utizadorCorreto) && (senhaDigitada === senhaCorreta);

// O login completo só é aprovado se as credenciais forem válidas E o captcha estiver feito
const loginAprovado = credenciaisValidas && captchaPreenchido;

// O sistema usa um ternário para saber se adiciona uma falha
const novaFalha = loginAprovado ? 0 : 1;

// Atualizamos o total de tentativas erradas que o utilizador já tinha (tinha 2)
tentativasErradas += novaFalha;

// A conta é bloqueada se o utilizador tiver 3 ou mais tentativas erradas
const contaBloqueada = tentativasErradas >= 3;

const precisaDe2FA = false;

// O operador ! (NÃO) inverte o valor. Se precisaDe2FA é false, !precisaDe2FA vira true.
const entrarDiretoNoPainel = loginAprovado && !precisaDe2FA;

// Mensagem final do sistema usando o ternário
const mensagemSistema = entrarDiretoNoPainel ? "Bem-vindo ao Painel Secreto!" : "Por favor, digite o código de segurança enviado para o telemóvel.";
