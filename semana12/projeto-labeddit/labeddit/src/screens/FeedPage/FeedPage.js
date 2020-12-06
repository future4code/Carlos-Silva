import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import { useHistory } from "react-router"
import { axiosConfig, baseUrl } from "../../constants"
import { LinearProgress } from "@material-ui/core"
import PostCard from "../../components/PostCard"
import NewPostForm from "../../components/NewPostForm"

const FeedPage = (props) => {
    const history = useHistory()
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(localStorage.getItem("token") === null){
            history.push("/login")
        }
    }, [])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = () => {
        setIsLoading(true)
        axios.get(`${baseUrl}/posts`, axiosConfig).then((response) => {
            setPosts(response.data.posts)
            setIsLoading(false)
        })
    }

    const handleVotePost =  async (postId, direction) => {
        const body = {
            direction: direction
        }
        try{
            await axios.put(`${baseUrl}/posts/${postId}/vote`, body, axiosConfig)
            fetchPosts()
        } catch (error) {
            alert("Não foi possível votar. Tente novamente.")
            console.error(error)
        }
        
    }

    const handleCreatePost = async (text, title) => {
        const body = {
            text: text,
            title: title
        }

        try{
            setIsLoading(true)
            await axios.post(`${baseUrl}/posts`, body, axiosConfig)
            fetchPosts()
        } catch (error) {
            alert("Não foi possível criar o post. Tente novamente.")
            console.error(error)
        }        
            
    }

    return(
        <div>
            <NewPostForm handleCreatePost={handleCreatePost}/>
            <hr/>
            {isLoading && <LinearProgress/>}
            {posts.map(post => {
                return (
                    <PostCard key={post.id} handleVotePost={handleVotePost} post={post} />
                )
            })}
        </div>
    )
}

export default FeedPage