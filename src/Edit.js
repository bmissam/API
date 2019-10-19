import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from'react-router-dom'
import {Link} from 'react-router-dom'

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {  name :"", 
        phone :'', 
        mail:'',
         list:[],
        ismodified :false
        }
    }
componentDidMount (){
    axios.get('/Contacts/'+this.props.id).then(res=>this.setState({ ...res.data
    })
)
}

onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
onEdit=()=> {
    
  
    axios.put('/Edit/'+this.props.id,
    { name: this.state.name, phone: this.state.phone, mail: this.state.mail })
    
}

    render() { 
      
        return ( 
           
        
        <div>
          
           <h1>EDIT PAGE</h1> 
           <input type="text" onChange={this.onChange} placeholder='name' name="name" />
           <input type="text" onChange={this.onChange} placeholder='Phone' name="phone" />
           <input type="text" onChange={this.onChange} placeholder='E-mail' name="mail" />
         
           <button id='editbutton' onClick={()=>{
               this.onEdit()
               document.location.reload(true)}}> <Link to="/Contacts"> EDIT</Link>  </button>
           { console.log('RENDER')}
          
        </div> );
    }
}


 
export default Edit;