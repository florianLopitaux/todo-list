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
            return <input type="checkbox" onChange={props.onClick} checked/>

        } else {
            return <input type="checkbox" onChange={props.onClick}/>
        }
}

class Task extends Component {
    render() {
        return (
            <section class="task-item">
                <ArrowsBox/>

                <h3>{this.props.title}</h3>

                <ValidateCheckbox
                    isChecked={this.props.isChecked}
                    onClick={this.props.onClick}
                />
            </section>
        );
    }
}

export default Task;
