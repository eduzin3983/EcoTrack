// Função para inicializar o gráfico de barras (Chart.js)
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('metricsChart').getContext('2d');
  const metricsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Água', 'Energia', 'Resíduos', 'Transporte'],
      datasets: [{
        label: 'Consumo (últimos 7 dias)',
        data: [180, 127.2, 100.5, 139.8],
        backgroundColor: [
          '#BCDBE5', // Água
          '#E7BC66', // Energia
          '#9BAD87', // Resíduos
          '#C5B79E'  // Transporte
        ],
        borderColor: [
          '#BCDBE5',
          '#E7BC66',
          '#9BAD87',
          '#C5B79E'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Modal de Ajuda (Classificações)
  const helpIcon = document.getElementById('helpIcon');
  const helpModal = document.getElementById('helpModal');
  const closeHelpModal = document.getElementById('closeHelpModal');

  // Abre o modal ao clicar no ícone
  helpIcon.addEventListener('click', () => {
    helpModal.style.display = 'block';
  });

  // Fecha o modal ao clicar no "X"
  closeHelpModal.addEventListener('click', () => {
    helpModal.style.display = 'none';
  });

  // Fecha o modal ao clicar fora do conteúdo
  window.addEventListener('click', (event) => {
    if (event.target === helpModal) {
      helpModal.style.display = 'none';
    }
  });
});
