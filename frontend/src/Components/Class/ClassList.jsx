import React, { Component } from 'react'
import { Form, Container, Button,Row ,Col,Image, Card} from "react-bootstrap";
import ClassCard from './ClassCard'
import axios from "axios";
import moment from 'moment'

import KommunicateChat from "../../ChatBot"
export default class ClassList extends Component {
  state = {
    allClass :[],
    selectedClass:[]
}

componentDidMount() {

    axios.get('http://localhost:5000/api/class/listClass')
        .then(res => {
          console.log(res.data)
            this.setState({
                allClass: res.data.listClass,
                selectedClass: res.data.listClass,

            })
        }).catch(err => console.log(err))



}
  render() {
    let dt = new moment()

    console.log(this.state.allClass)
    // console.log(this.state.allClass[1].date)
    // dt.isBefore(moment(this.state.allClass[1].date))
    let All = this.state.allClass.map((classElemnet,i) =>(
      dt.isSameOrBefore(moment(classElemnet.date))?
      <ClassCard class={classElemnet} id={classElemnet._id} key={i} />:null
      // <ClassCard class={classElemnet} id={classElemnet._id} key={i} />
    ));
    
    return (
      <div>
      {/* <h1>All Classes</h1> */}
      <Container className="mt-5" fluid >
          <Row className="mt-5 justify-content-center" style={{padding:"0"}}>
          {All}
          </Row>
        </Container>
        <KommunicateChat />
     </div >
    )
  }
}
