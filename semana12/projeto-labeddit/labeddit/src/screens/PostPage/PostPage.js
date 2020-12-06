import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import PostCard from "../../components/PostCard"
import axios from "axios"
import { axiosConfig, baseUrl } from "../../constants"
import CommentListItem from "../../components/CommentListItem"

import { Button, TextField } from "@material-ui/core"
import List from '@material-ui/core/List';

const PostPage = (props) => {
    const [postDetails, setPostDetails] = useState(null)
    const [newComment, setNewComment] = useState("")
    const params = useParams()
    const history = useHistory()

    useEffect(() => {
        if(localStorage.getItem("token") === null){
            history.push("/login")
        } else if(!params.postId){
            history.push("/feed")
        }
    }, [])

    useEffect(() => {
       fetchPostDetails()
    }, [])

    const fetchPostDetails = () => {
        axios.get(`${baseUrl}/posts/${params.postId}`, axiosConfig).then((response) =>{
            setPostDetails(response.data.post)
        })
    }

    const handleUpdateComment = (event) => {
        setNewComment(event.target.value)
    }

    const handleCreateComment = async () => {
        const body = {
            text: newComment
        }

        try{
            await axios.post(`${baseUrl}/posts/${params.postId}/comment`, body, axiosConfig)

            setNewComment("")
            fetchPostDetails()
        } catch(error) {
            alert("Não foi possível comentar. Tente novamente.")
            console.error(error)
        }
        
    }

    const handleCommentVote = async (commentId, direction) => {
        const body = {
            direction: direction
        }

        try{
            await axios.put(`${baseUrl}/posts/${params.postId}/comment/${commentId}/vote`, body, axiosConfig)
            fetchPostDetails()
        } catch (error) {
            alert("Não foi possível votar no comentário. Tente novamente.")
            console.error(error)
        }
        
    }

    return(
        <div>
            { postDetails !== null && <PostCard post={postDetails} hideCommentButton />}
            <TextField 
                placeholder={"Seu comentário"}
                value={newComment}
                onChange={handleUpdateComment}
            />
            <Button onClick={handleCreateComment}>Enviar comentário</Button>
            <List dense>
                { postDetails && postDetails.comments.map((comment) => {
                    return (
                        <CommentListItem comment={comment} handleCommentVote={handleCommentVote}/>
                      )})}
            </List>
        </div>
    )
}

export default PostPage