// Simula a aplicação de um filtro no histórico de transações
// Futuramente sera implementado o envio dos dados para o backend.

document.getElementById('filtroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const dataInicio = document.getElementById('dataInicio').value;
    const dataFim = document.getElementById('dataFim').value;
    const ordenar = document.getElementById('ordenar').value;

    console.log("Filtros aplicados:", { dataInicio, dataFim, ordenar });
    alert("Filtro aplicado (funcionalidade de filtro não implementada).");
  });