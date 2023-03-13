import { Component } from "react";

function ArrowsBox(props) {
    return (
        <div id="arrows-container">
            <ion-icon name="arrow-up-circle-outline"></ion-icon>
            <ion-icon name="arrow-down-circle-outline"></ion-icon>
        </div>
    );
}

class Task extends Component {
    render() {
        return (
            <section class="task-item">
                <ArrowsBox/>

                <h3>{this.props.title}</h3>

                <input type="checkbox"/>
            </section>
        );
    }
}

export default Task;
