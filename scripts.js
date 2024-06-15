// scripts.js
document.getElementById('showChart').addEventListener('click', function() {
    var chartContainer = document.getElementById('chartContainer');
    chartContainer.style.display = 'block';

    // 假設使用Chart.js來繪製圖表
    var ctx = document.createElement('canvas');
    chartContainer.appendChild(ctx);
    var chart = new Chart(ctx, {
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
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Collect form data
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Check if all fields are filled
    if (name === '' || email === '' || message === '') {
        Swal.fire({
            icon: 'warning',
            title: '欄位未填',
            text: '所有欄位均為必填，請完整填寫後再提交。',
            confirmButtonText: '知道了'
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: '提交成功',
            text: '感謝您的聯絡，我們會盡快與您聯絡。',
            confirmButtonText: '好的'
        }).then(function() {
            // If user clicks "OK", submit the form
            document.getElementById('contactForm').submit();
        });
    }
});
