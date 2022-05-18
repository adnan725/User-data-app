import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import styles from './AddUser.module.css'
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [userAge, setUserAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || userAge.trim().length === 0 || +userAge < 1) {

        } else {
            props.onAddUser(enteredUsername, userAge)
            setEnteredUsername('');
            setUserAge('')
        }
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
      setUserAge(event.target.value)
    }

    return (
        <div>
            <ErrorModal title={'An Error'} message={'Invalid input!'}/>
            <Card className={styles.input}>
                <form onClick={addUserHandler}>
                    <label htmlFor="username">User name</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" value={userAge} onChange={ageChangeHandler}/>
                    <Button>Add user</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser