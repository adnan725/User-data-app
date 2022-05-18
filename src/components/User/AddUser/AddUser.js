import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import styles from './AddUser.module.css'
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [userAge, setUserAge] = useState('')
    const [isError, setIsError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || userAge.trim().length === 0) {
            setIsError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty input)'
            })
            return;
        } if (+userAge < 1) {
            setIsError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            })
            return
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

    const modalRemoveHandler = () => {
        setIsError(null)
    }

    return (
        <div>
            {isError && <ErrorModal
                title={isError.title}
                message={isError.message}
                onModalRemove={modalRemoveHandler}
            />}
            <Card className={styles.input}>
                <form>
                    <label htmlFor="username">User name</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" value={userAge} onChange={ageChangeHandler}/>
                    <Button onClick={addUserHandler}>Add user</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser