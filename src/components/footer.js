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

export default function Footer(props) {
    // state

    // actions
    
    // render
    return (
        <footer>
            <SearchBar/>
            <AddTaskButton/>
        </footer>
    );
}
