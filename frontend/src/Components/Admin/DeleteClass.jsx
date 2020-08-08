import React, { Component } from 'react'
import axios from "axios";
import ClassList from '../Class/ClassList'
export default class DeleteClass extends Component {

    
      componentDidMount() {
        console.log("id"+this.props.match.params.id)
        axios.delete(`http://localhost:5000/api/class/delete/${this.props.match.params.id}`).then((res) =>
        //back to ClassList.jsx Component
        {this.props.history.push("/ClassList")}
       
        );
      }
    render() {
        return (
            <div>
         
            </div>
        )
    }
}
