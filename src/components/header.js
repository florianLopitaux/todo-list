import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Task progression = {this.props.tasksValidate}/{this.props.tasksCount}</h1>
            </header>
        );
    }
}

export default Header;
