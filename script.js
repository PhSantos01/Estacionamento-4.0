function adicionarEstacionamento() {
    const placa = document.getElementById("placa").value;
    const pagou = document.getElementById("pagou").value;

    const estacionamentoContainer = document.getElementById("estacionamentos-container");

    const estacionamentoDiv = document.createElement("div");
    estacionamentoDiv.className = "estacionamento";

    estacionamentoDiv.innerHTML = `
        <p><strong>Placa:</strong> ${placa}</p>
        <p><strong>Pagou:</strong> ${pagou === "sim" ? "Sim" : "Não"}</p>
        <button onclick="removerEstacionamento(this)" class="remove-button">X</button>
    `;

    estacionamentoContainer.appendChild(estacionamentoDiv);
}

function removerEstacionamento(element) {
    const estacionamentoDiv = element.parentNode;
    estacionamentoDiv.remove();
}
