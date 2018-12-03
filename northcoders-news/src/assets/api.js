import axios from 'axios';

const baseURL = 'https://limitless-plains-42557.herokuapp.com/api/'
 

export const getArticlesByTopic = async (topic_slug) => {
    const {data} = await axios.get(`${baseURL}/topics/${topic_slug}/articles`)
    return data
 }

 export const getTopics = async() => {
     const {data} = await axios.get(`${baseURL}/topics`)
     return data.topics;
 }

 export const getArticleByID = async(article_id) => {
     const {data} = await axios.get(`${baseURL}/articles/${article_id}`)
     return data.article
     
 }

 export const voteChange= async (id, increment, type) => {
     const mod = type.slice(0,-1)
     const {data} = await axios.patch(`${baseURL}/${type}/${id}?vote=${increment}`)
     return data[mod]  //change api for this
 }

 export const getComments = async (article_id) => {
     const {data} = await axios.get(`${baseURL}/articles/${article_id}/comments`)
     return data.comments;
 }

 export const addArticle = async (content, topic_slug) => {

     const { data } = await axios.post(`${baseURL}/topics/${topic_slug}/articles`, content)
     return data.article;

 }

 export const addComment = async (content, article_id) => {

     const { data } = await axios.post(`${baseURL}/articles/${article_id}/comments`, content)
     return data.comment
 }

 export const getUser = async (username) => {
    const { data } = await axios.get(`${baseURL}/users/${username}`)
    return data.user[0];
 }

 export const deleteComment = async (comment_id) => {
     const {data} = await axios.delete(`${baseURL}/comments/${comment_id}`)
     console.log(data)
 }