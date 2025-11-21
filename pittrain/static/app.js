document.addEventListener('DOMContentLoaded', function() {
const barCtx = document.getElementById('myBarChart');
    fetch('/facts/')
        .then(response => response.json())
        .then(allFacts => {
            const labels = allFacts.map(fact => fact.funFact);
            const data = allFacts.map(fact => fact.score);

            new Chart(barCtx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: "Fact Score",
                        data: data,
                        borderWidth: 1,
                        }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Score'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Facts'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error loading data:', error));
});

