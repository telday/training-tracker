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
    var prom = $.get('/api/exercises', (data) => {
        console.log(data);
        var k = data.exercises;
    });
    return prom;
}

class ExerciseSelector extends React.Component {
    constructor(props){
        super(props);
    }

    handleClick(i){
        return;
    }

    render(){
        let childArray = Array();
        childArray.push(React.createElement('div', {
                    className: 'btn btn-secondary dropdown-toggle',
                    type: 'button',
                    'data-toggle': 'dropdown',
                    'aria-haspopup': true,
                    'aria-expanded': false,
                    key: 'dropdownMenuButton'
                },
                'Dropdown toggle'
            )
        );

        getExerciseInfo().done((data) => {
            let exercises = data;
        });
        for (let i = 0; i < exercises.length; i++){
            let el = React.createElement('div', {
                    className: 'dropdown-item',
                    'aria-labelledBy': 'dropdown'
                },
                exercises[i]
            );
            childArray.push(el);
        }
        return React.createElement('div', {
            className: 'dropdown',
        }, childArray);
    }
}

window.onload = () => {
    initializeHistoryChart();
    ReactDOM.render(
        React.createElement(ExerciseSelector, null),
        document.getElementById('placeholder')
    );
};
