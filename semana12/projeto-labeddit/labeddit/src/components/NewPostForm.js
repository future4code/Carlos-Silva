import React, { useState } from "react"
import { Button, TextField } from "@material-ui/core"

const NewPostForm = (props) => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const createPost = () => {
        props.handleCreatePost(text, title)
    }

    const handlePostTitle =(event) => {
        setTitle(event.target.value)
    }

    const handlePostText =(event) => {
        setText(event.target.value)
    }

    return(
        <div>
            <TextField 
                placeholder={"Título do post"}
                value={title}
                onChange={handlePostTitle}
                />
            <TextField 
                placeholder={"Texto do post"}
                value={text}
                onChange={handlePostText}
            />
            <Button onClick={createPost}>Criar novo post</Button>
        </div>
    )
}

export default NewPostForm