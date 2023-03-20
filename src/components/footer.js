import { useState } from 'react';

export default function Footer(props) {
    // state
    const [searchValue, setSearchValue] = useState("");

    // actions
    const handleInputSearch = (event) => {
        setSearchValue(event.target.value);
        
        if (event.target.value.length >= 3) {
            props.setTasksDisplay(props.tasks.filter(element => element.title.includes(event.target.value)));

        } else {
            props.setTasksDisplay(props.tasks.slice());
        }
    }

    // render
    return (
        <footer>
            <input type="text" placeholder="Search..." onChange={handleInputSearch}/>
            
            <button>
                <ion-icon name="add-circle-outline"></ion-icon>
            </button>
        </footer>
    );
}
