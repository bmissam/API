import React, { Component } from 'react';
import axios from 'axios'
import {Redirect,Link} from'react-router-dom'
class Remove extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [],
         
         }
    }

    componentDidMount (){
        axios.get('/Contacts/'+this.props.id).then(res=>this.setState({ ...res.data
        })
    )
    }


    Onremove =()=> {
        axios.delete ('/Contacts/'+this.props.id).then(res => this.setState({ ...res.data})).catch(err => console.log('add error'))
        this.setState({
            isremoved:true
        })
    }





    render() { 
        return ( 
       
        <div>
<p>Removing...</p>
<button onClick={()=>{
    this.Onremove()
    document.location.reload(true)}}><Link to="/Contacts">REMOVE</Link></button>
        </div> );
    }
}
 
export default Remove;