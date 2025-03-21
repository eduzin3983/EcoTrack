// Esta função utiliza a biblioteca Chart.js para criar um gráfico de barras. 
// Configura o gráfico com os dados de consumo (água, energia, resíduos e transporte) dos últimos 7 dias, 

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
          '#BCDBE5',    // Água
          '#E7BC66',  // Energia
          '#9BAD87',   // Resíduos
          '#C5B79E'    // Transporte
        ],
        borderColor: [
          '#BCDBE5',    // Água
          '#E7BC66',  // Energia
          '#9BAD87',   // Resíduos
          '#C5B79E'    // Transporte
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
});
