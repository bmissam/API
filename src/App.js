import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Input from './Input'
import List from './List'
import Edit from './Edit'
import Remove from './Remove'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: '',
      mail: '',
      list: []

    }
  }




  componentDidMount = () => {
    axios.get('/Contacts/').then(res => this.setState({ list: res.data })).catch(err => console.log("erreur"))

  }



  render() {
    return (<div>

      <Router>
        <Route path={'/'} render={() => {
          return (
            <div>
              <Link to='/add_Contact/'>
                <p>ADD CONTACT </p>
              </Link>
              <Link to='/Contacts/'>
                <p>Contact LIST </p></Link>
            </div>

          )
        }} />

        <Switch>

         <Route path='/Remove/:id' render={(props) => <Remove id={props.match.params.id}/>}/>
          <Route exact path='/add_Contact/' render={() => <Input list={this.state.list}

          />} />
          <Route path='/Contacts/' render={() => <List list={this.state.list}
          />} />
          <Route exact path='/Edit/:id' render={(props) => <Edit id={props.match.params.id} />} />
        </Switch>
      </Router>
    </div>);
  }
}

export default App;