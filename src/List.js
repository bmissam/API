import React, { Component } from 'react';

import { Link} from 'react-router-dom'



class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
 

    render() {
        return (
            <div>
           {    console.log(this.props.list)}
                {this.props.list.map((el,i) => {
                    return (
                        <div key={i} >
                            
                            <span >{el.name} </span>
                            <span >{el.phone}</span>
                            <span>{el.mail}</span>
                            <Link to={`/Edit/${el._id}`}>
                            <button >modifer</button>
                            </Link> 
                        <Link to={`/Remove/${el._id}`}>
                            <button>supprimer</button>
                            </Link>
                        </div>

                    )
                })}

            </div>
        )
    }
}
export default List
