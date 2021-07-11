import React, {ChangeEvent, useState} from "react";
import {TextField} from "@material-ui/core";

type EditableSpanPropsType = {
    title: string
    onChange: (value: string) => void
}

export const EditableSpan = React.memo((props: EditableSpanPropsType) => {

    const [value, setValue] = useState('')
    const [editMode, setEditMode] = useState<boolean>(false)

    const onActiveEditMode = () => {
        setEditMode(true)
        setValue(props.title)
    }

    const onActiveVewMode = () => {
        setEditMode(false)
        props.onChange(value)
    }

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return editMode
        ? <TextField multiline value={value} onBlur={onActiveVewMode} onChange={onChangeValue} autoFocus/>
        : <span onDoubleClick={onActiveEditMode}>{props.title}</span>
} )