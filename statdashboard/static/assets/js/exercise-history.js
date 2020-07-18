function initializeHistoryChart(){
    $.get('/api/exercise_history', {exercise_id: 3}, (data) => {
        context = document.getElementById('exercise-history-chart').getContext('2d');
        chart = new Chart(context, {
            type: "line",
            data: {
                labels: data.dates,
                datasets: [{
                    data: data.weights,
                    backgroundColor: '#ff000099'
                }]
            },
            options: {
                legend: {
                    display: false
                }
            }
        });
    });

    $.get('/api/exercises', (data) => {
        console.log(data);
    });
}

window.onload = () => {
    initializeHistoryChart();
};
