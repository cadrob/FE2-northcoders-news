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

 export const voteArticle = async (article_id, increment) => {
     const {data} = await axios.patch(`${baseURL}/articles/${article_id}?vote=${increment}`)
     return data.article
 }

 export const getComments = async (article_id) => {
     const {data} = await axios.get(`${baseURL}/articles/${article_id}/comments`)
     return data.comments;
 }