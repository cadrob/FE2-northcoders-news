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


class App extends Component {
  state = { // lets get a loading spinner going here... loading component with a spinner
    topicList:[],
    user: null
    //need the username and id in here


  }
  render() {
    return (
  <div className="App">
    <Header />
    <Nav topicList={this.state.topicList} />
    <Login setUser={this.setUser} className="login" />
  
  
  <Router className="main">
    <Home path="/"/>
    <Articles topicList={this.state.topicList} path="/topics/:topic_slug/articles" />
    <Article path="/articles/:article_id" />
    <ArticleAdder path="/topics/:topic_slug/articles/addarticle" />
 </Router>
</div>

    );
  }
  
  setUser = (user) => {
    this.setState({user})

    //lets try to log out later


  }

  componentDidMount() { //get the topics
      api.getTopics()
      .then((topics) => this.setState({topicList: topics}))
  }
}

export default App;
//only show delete button for comments that users can delete.
// form on Submit

//on buttons for adding deleting and voting , take to login page
