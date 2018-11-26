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

class App extends Component {
  state = { //need a current list of all topics within here and slugs
    topicList:[]
  }
  render() {
    return (
      <div className="App">
  <Header className ="header" />
  <Nav topicList={this.state.topicList} />
  <Login />
  
  
  <Router className="main">
  <Home path="/"/>
  <Articles path="/topics/:topic_slug/articles" />
 {<Article path="/articles/:article_id" />
 }
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
