import React, {ChangeEvent, useCallback} from "react";
import styles from "./Todolist/Todolist.module.css";
import {Button, Checkbox} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan/EditableSpan";
import {TaskType} from "../AppWithRedux";

type TaskPropsType = {
    todolistID: string
    removeTask: (id: string, todolistID: string) => void
    changeStatus: (id: string, isDone: boolean, todolistID: string) => void
    changeTaskTitle: (todolistID: string, value: string) => void
    task: TaskType
}

export const Task = React.memo(({todolistID, changeTaskTitle, ...props}: TaskPropsType) => {

    const onClickHandler = () => props.removeTask(props.task.id, todolistID)

    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(props.task.id, e.currentTarget.checked, todolistID)
    }

    const onChangeTaskTitleHandler = useCallback((value: string) => {
            changeTaskTitle(todolistID, value)
        },
        [todolistID, changeTaskTitle])

    return <div className={styles.tasksBlock}>
        <Checkbox onChange={onChangeStatusHandler}
                  checked={props.task.isDone}
        />
        <EditableSpan title={props.task.title}
                      onChange={onChangeTaskTitleHandler}
        />
        <Button onClick={onClickHandler}
                variant="contained"
                color="primary"
                size="small">x</Button>
    </div>
})