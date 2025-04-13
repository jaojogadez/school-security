new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: [
      "6:00",
      "7:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
    ],
    datasets: [
      {
        data: [0, 2, 5, 12, 8, 14, 20, 15, 42, 7, 13, 6, 3, 0],
        label: "Entradas",
        borderColor: "#3e95cd",
        backgroundColor: "rgba(62, 149, 205, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Quantidade de Visitantes por Hora (Entradas)",
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Número de Visitantes",
        },
        beginAtZero: true,
      },
    },
  },
});