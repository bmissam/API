import React, { Component } from 'react';
import { Link,Route,Router } from 'react-router-dom'
import Product from './Product'
class Com extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
    <Router>
        <Route path={"/"} render={
            ()=>{
                return (
                    <div>
                        <Link to='/Product/'>
                        </Link>
                    </div>
                )
            }
        }/>
        <Route path={'/Product'} Component={Product}/>
        <Route/>
    </Router>

        </div> );
    }
}
 
export default Com;