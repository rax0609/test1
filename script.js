// 時間軸動畫
const timelineEvents = document.querySelectorAll('.timeline-event');

window.addEventListener('scroll', () => {
  timelineEvents.forEach((event) => {
    if (isElementInViewport(event)) {
      event.classList.add('animate');
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// 圖表動畫
const chartElement = document.querySelector('.chart');
let chartInstance = null;

window.addEventListener('scroll', () => {
  if (isElementInViewport(chartElement)) {
    chartElement.classList.add('animate');
    if (!chartInstance) {
      animateChart();
    }
  }
});

function animateChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [
          {
            label: '智慧手機',
            data: [81, 85, 87, 89, 91],
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            borderWidth: 1
          },
          {
            label: '平板電腦',
            data: [53, 56, 58, 60, 62],
            backgroundColor: '#dc3545',
            borderColor: '#dc3545',
            borderWidth: 1
          }
        ]
      },
      options: {
        animation: {
          duration: 1000,
          easing: 'easeInOutQuart',
          onComplete: () => {
            chartElement.classList.add('chart-animated');
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20
            }
          }
        }
      }
    });
  }
  