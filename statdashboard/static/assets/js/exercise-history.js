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

}

function getExerciseInfo(){
    $.get('/api/exercises', (data) => {
        return data.exercises;
    });
}

class ExerciseSelector extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: 'test'
        };
    }

    handleClick(){
        const selected = 'a';
        this.setState({selected: selected});
    }

    render(){
        return React.createElement('button', {
            className: 'btn btn-light',
            onClick: () => this.handleClick(),
        }, this.state.selected);
    }
}

window.onload = () => {
    initializeHistoryChart();
    ReactDOM.render(
        React.createElement(ExerciseSelector, null),
        document.getElementById('placeholder')
    );
};
