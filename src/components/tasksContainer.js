import { Component } from "react";
import Task from "./task.js";

class TasksContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {'title': "1. Idée", 'isChecked': true},
                {'title': "2. Marché", 'isChecked': false},
                {'title': "3. Wireframe", 'isChecked': true},
                {'title': "4. Design", 'isChecked': true},
                {'title': "5. Landingpage", 'isChecked': false},
                {'title': "6. Développement", 'isChecked': false},
                {'title': "7. Publish", 'isChecked': false},
                {'title': "8. Pub", 'isChecked': true},
                {'title': "9. Feedback", 'isChecked': false},
            ],
        }
    }

    render() {
        return (
            <main>
                {this.state.tasks.map(item => <Task title={item.title} isChecked={item.isChecked} />)}
            </main>
        );
    }
}

export default TasksContainer;
