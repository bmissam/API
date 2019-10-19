import React, { Component } from 'react';
import axios from 'axios'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: '',
            mail: '',
            list: []


        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }




    AddContact = () => {
        axios.post('/add_Contact/', { name: this.state.name, phone: this.state.phone, mail: this.state.mail })
            .then(axios.get('/Contacts/').then(res => this.setState({ ...res.data})).catch(err => console.log('add error'))
            )}


    render() {
        return (
            <div>
                <form>

                    Name: <input type="text" onChange={this.onChange} placeholder='name' name="name" />
                    Phone Number<input type="text" onChange={this.onChange} placeholder='phone' name="phone" />

                    E-mail<input type="text" onChange={this.onChange} placeholder='mail' name="mail" />
                    <button onClick={this.AddContact}>ADD</button>
                </form>




            </div>
        )
    }
}

export default Input;