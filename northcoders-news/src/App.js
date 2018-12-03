import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router'
import Home from './components/Home'
import Login from './components/Login'
import Nav from './components/Nav'
import Articles from './components/Articles'
import Header from './components/Header'
import Article from './components/Article'
import * as api from './assets/api'
import ArticleAdder from './components/ArticleAdder'
import CommentAdder from './components/CommentAdder'


class App extends Component {
  state = { // lets get a loading spinner going here... loading component with a spinner
    topicList:[],
    user: null
    //need the username and id in here
  }
  render() {
    const {user} = this.state;
    return (
  <div className="App">
    <Header />
    <Login setUser={this.setUser} />
    <Nav topicList={this.state.topicList} />
  
  
  <Router className="main">
    <Home path="/"/>
    <Articles user={user} topicList={this.state.topicList} path="/topics/:topic_slug/articles" />
    <Article user ={user} path="/articles/:article_id" />
    <ArticleAdder user={user} path="/topics/:topic_slug/articles/addarticle" />
    <CommentAdder user={user} path="/articles/:article_id/comments" />
 </Router>
</div>

    );
  }
  
  setUser = (user) => {
    this.setState({user});
  }

  componentDidMount() { //get the topics
      api.getTopics()
      .then((topics) => this.setState({topicList: topics}))
  }
}
export default App;
