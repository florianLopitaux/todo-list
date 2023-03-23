export default function Footer(props) {
    // actions
    const handleInputSearch = (event) => {
        if (event.target.value.length >= 3) {
            props.setTasksFilter(event.target.value.toUpperCase());

        } else {
            props.setTasksFilter("");
        }
    }

    const handleAddTask = () => {
        let taskName = "";

        while (taskName === "") {
            taskName = prompt("Donnez un nom à la tache");
        }

        let newTasks = props.tasks.slice();
        newTasks.push({'title': taskName, 'isChecked': false});

        props.setTasks(newTasks);
    }

    // render
    return (
        <footer>
            <input type="text" placeholder="Search..." onChange={handleInputSearch}/>
            
            <button onClick={handleAddTask}>
                <ion-icon name="add-circle-outline"></ion-icon>
            </button>
        </footer>
    );
}
