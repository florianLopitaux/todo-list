import { Component } from "react";

function ArrowsBox(props) {
    return (
        <div id="arrows-container">
            <ion-icon name="arrow-up-circle-outline"></ion-icon>
            <ion-icon name="arrow-down-circle-outline"></ion-icon>
        </div>
    );
}

function ValidateCheckbox(props) {
        if (props.isChecked) {
            return <input type="checkbox" checked/>

        } else {
            return <input type="checkbox"/>
        }
}

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            isChecked: this.props.isChecked,
        };
    }

    render() {
        return (
            <section class="task-item">
                <ArrowsBox/>

                <h3>{this.state.title}</h3>

                <ValidateCheckbox
                    isChecked={this.state.isChecked}
                />
            </section>
        );
    }
}

export default Task;
