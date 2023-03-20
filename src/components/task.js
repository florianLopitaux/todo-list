export default function Task(props) {
    // render
    return (
        <section className="task-item">
            <div id="arrows-container">
                <button onClick={props.onArrowUpClick}><ion-icon name="arrow-up-circle-outline"></ion-icon></button>
                <button onClick={props.onArrowDownClick}><ion-icon name="arrow-down-circle-outline"></ion-icon></button>
            </div>

            <h3>{props.title}</h3>

            <input type="checkbox" onChange={props.handleTaskCheckChange} checked={props.isChecked}/>
        </section>
    );
}
