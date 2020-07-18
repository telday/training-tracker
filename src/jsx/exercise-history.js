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

function exerciseInfo(){
    const [info, setInfo] = React.useState(Array());
    
    React.useEffect(() => {
        $.get('/api/exercises', (data) => {
            setInfo(data.exercises);
        });
    });

    return info;
}

function ExerciseSelector(props){
    const exercises = exerciseInfo().map(
        ex => 
                <div
                    className="dropdown-item"
                >
                    {ex}
                </div>
            );

    return <div className="dropdown">
        <div
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            key="dropdownMenuButton"
        >
            Dropdown Toggle
        </div>
        <div className="dropdown-menu" aria-labelledby="dropdown">
            { exercises }
        </div>
    </div>
}

function Card(props){
    return <div className="card">
        <div className="card-header">
            <h5 className="card-title">{props.title}</h5>
            {
                props.category &&
                <p className="card-category">{props.category}</p>
            }
            {props.header}
        </div>
        <div className="card-body">
            {props.children}
        </div>
    </div>
}

function GraphCard(props){
    return <Card title="test" header={<ExerciseSelector />}>
        <canvas id={props.id} style={width: "300px", height: "200px"}></canvas>
    </Card>
}

window.onload = () => {
    initializeHistoryChart();
    ReactDOM.render(
        <GraphCard />,
        document.getElementById("placeholder")
    );
};
