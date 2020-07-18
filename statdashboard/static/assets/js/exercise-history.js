var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function initializeHistoryChart() {
    $.get('/api/exercise_history', { exercise_id: 3 }, function (data) {
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

function exerciseInfo() {
    var _React$useState = React.useState(Array()),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        info = _React$useState2[0],
        setInfo = _React$useState2[1];

    React.useEffect(function () {
        $.get('/api/exercises', function (data) {
            setInfo(data.exercises);
        });
    });

    return info;
}

function ExerciseSelector(props) {
    var exercises = exerciseInfo().map(function (ex) {
        return React.createElement(
            'div',
            {
                className: 'dropdown-item'
            },
            ex
        );
    });

    return React.createElement(
        'div',
        { className: 'dropdown' },
        React.createElement(
            'div',
            {
                className: 'btn btn-secondary dropdown-toggle',
                type: 'button',
                'data-toggle': 'dropdown',
                'aria-haspopup': 'true',
                'aria-expanded': 'false',
                key: 'dropdownMenuButton'
            },
            'Dropdown Toggle'
        ),
        React.createElement(
            'div',
            { className: 'dropdown-menu', 'aria-labelledby': 'dropdown' },
            exercises
        )
    );
}

function Card(props) {
    return React.createElement(
        'div',
        { className: 'card' },
        React.createElement(
            'div',
            { className: 'card-header' },
            React.createElement(
                'h5',
                { className: 'card-title' },
                props.title
            ),
            props.category && React.createElement(
                'p',
                { className: 'card-category' },
                props.category
            )
        ),
        React.createElement(
            'div',
            { className: 'card-body' },
            props.children
        )
    );
}

function GraphCard(props) {
    return React.createElement(
        Card,
        { title: 'test' },
        'test'
    );
}

window.onload = function () {
    initializeHistoryChart();
    ReactDOM.render(React.createElement(GraphCard, null), document.getElementById("placeholder"));
};