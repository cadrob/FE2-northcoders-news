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