function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simples validação de usuário e senha
    if (username === "adm01" && password === "123321") {
        alert("Login bem-sucedido! Redirecionando para o sistema de controle.");
        window.location.href = "placas.html";
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
}
