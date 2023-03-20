export default function Header(props) {
    //state

    // actions
    const computeTaskValidate = () => {
        let taskValidateCount = 0;

        props.tasks.forEach(element => {
            if (element.isChecked) {
                taskValidateCount++;
            }
        })

        return taskValidateCount;
    }

    // render
    return (
        <header>
            <h1>Task progression = {computeTaskValidate()} / {props.tasks.length}</h1>
        </header>
    );
}
