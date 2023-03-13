import { Component } from "react";
import Task from "./task.js";

class TasksContainer extends Component {
    render() {
        return (
            <main>
                <Task
                    title={"1. Idée"}
                />
                <Task
                    title={"2. Marché"}
                />
                <Task
                    title={"3. Wireframe"}
                />
                <Task
                    title={"4. Design"}
                />
                <Task
                    title={"5. Landingpage"}
                />
                <Task
                    title={"6. Développement"}
                />
                <Task
                    title={"7. Publish"}
                />
                <Task
                    title={"8. Pub"}
                />
                <Task
                    title={"9. Feedback"}
                />
            </main>
        );
    }
}

export default TasksContainer;
