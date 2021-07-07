import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChange: (value: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {

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
        ? <input value={value} onBlur={onActiveVewMode} onChange={onChangeValue} autoFocus/>
        : <span onDoubleClick={onActiveEditMode}>{props.title}</span>
}