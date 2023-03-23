export default function Task(props) {
    // actions
    const handleTaskCheckChange = () => {
        let newTasks = props.tasks.slice();
        newTasks[props.position].isChecked = !newTasks[props.position].isChecked;
  
        props.setTasks(newTasks);
        props.registerTasksMidification(newTasks);
    };

    const handleArrowClick = (moveVelocity) => {
        if (props.position + moveVelocity >= props.tasks.length || props.position + moveVelocity < 0) {
            return;
        }

        let newTasks = props.tasks.slice();
        
        // swap elements
        const tempTask = newTasks[props.position];
        newTasks[props.position] = newTasks[props.position + moveVelocity];
        newTasks[props.position + moveVelocity] = tempTask;

        props.setTasks(newTasks);
        props.registerTasksMidification(newTasks);
    }

    const handleDeleteClick = () => {
        let newTasks = props.tasks.slice();
        newTasks.splice(props.position, 1); // delete this task
        
        props.setTasks(newTasks);
        props.registerTasksMidification(newTasks);
    }


    // render
    return (
        <section className="task-item">
            <div id="right-container">
                <input type="checkbox" onChange={() => handleTaskCheckChange()} checked={props.isChecked}/>
                <button onClick={() => handleDeleteClick()}><ion-icon name="trash-outline"></ion-icon></button>
            </div>

            <h3>{(props.position + 1) + ". " + props.title}</h3>

            <div id="arrows-container">
                <button onClick={() => handleArrowClick(-1)}><ion-icon name="arrow-up-circle-outline"></ion-icon></button>
                <button onClick={() => handleArrowClick(1)}><ion-icon name="arrow-down-circle-outline"></ion-icon></button>
            </div>
        </section>
    );
}
