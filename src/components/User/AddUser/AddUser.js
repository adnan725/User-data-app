import React from "react";
import Card from "../../UI/Card/Card";
import styles from './AddUser.module.css'

const AddUser = props => {

    const addUserHandler = (event) => {
      event.preventDefault()
    }

    return (
        <Card className={styles.input}>
            <form onClick={addUserHandler}>
                <label htmlFor="username">User name</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number"/>
                <button>Add user</button>
            </form>
        </Card>
    )
}

export default AddUser