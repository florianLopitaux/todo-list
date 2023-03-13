import { Component } from "react";

function ArrowsBox(props) {
    return (
        <div id="arrows-container">
            <ion-icon name="arrow-up-circle-outline"></ion-icon>
            <ion-icon name="arrow-down-circle-outline"></ion-icon>
        </div>
    );
}

function CheckedIcon(props) {
    return (
        <ion-icon></ion-icon>
    );
}

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            isChecking: this.props.isChecking,
        };
    }

    render() {
        return (
            <section class="task-item">
                <ArrowsBox/>

                <h3>{this.state.title}</h3>

                <CheckedIcon
                    isChecking={this.state.isChecking}
                />
            </section>
        );
    }
}

export default Task;
