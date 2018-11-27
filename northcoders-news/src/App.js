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
import './components/articlecontent.css'

class App extends Component {
  state = { // lets get a loading spinner going here... loading component with a spinner
    topicList:[]

  }
  render() {
    return (
  <div className="App">
    <Header className ="header" />
    <Nav className="nav" topicList={this.state.topicList} />
    <Login className="login" />
  
  
  <Router className="main">
    <Home path="/"/>
    <Articles path="/topics/:topic_slug/articles" />
    <Article className ="article-content" path="/articles/:article_id" />
 </Router>
</div>

    );
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
