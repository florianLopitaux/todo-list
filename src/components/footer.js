import { Component } from "react";

function SearchBar(props) {
    return (
        <input type="text" placeholder="Search..."/>
    );
}

function AddTaskButton(props) {
    return (
        <button>
            <ion-icon name="add-circle-outline"></ion-icon>
        </button>
    );
}

class Footer extends Component {
    render() {
        return (
            <footer>
                <SearchBar/>
                <AddTaskButton/>
            </footer>
        );
    }
}

export default Footer;
