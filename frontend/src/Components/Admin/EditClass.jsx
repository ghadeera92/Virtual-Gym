import React, { Component } from 'react'
import {Container,Form,Button,Card} from 'react-bootstrap';
import axios from "axios";
export default class EditClass extends Component {

 state = {
     Class:{}
 };

 componentDidMount() {
    console.log("component EditClass running !!!")
    // axios.get(/edit/:id) ... to show the data in placeholder="data before edit" in the form 

    axios.get(`http://localhost:5000/api/class/edit/${this.props.match.params.id}`)
    .then(res => {
      console.log(res.data)
        this.setState({
            Class: res.data.resultOneClass,
            
              
        })
    }).catch(err => console.log(err))
    }
   
    
   
     EditHandler = async () => {
       try {
         let data = await axios.put(
           `http://localhost:5000/api/class/edit/${this.props.match.params.id}`,
           this.state
         );
         console.log(data);
        //back to ClassList.jsx Component
        {this.props.history.push("/ClassList")}
       } catch (err) {
         console.log(err);
       }
     };

     changeHandler = (e) => {
        // console.log("name of field", e.target["name"]);
        // console.log("value of field", e.target.value);
        let temp = { ...this.state }; //copy state object
        temp[e.target.name] = e.target.value;
        this.setState(temp);
      };

    render() {

        return (
            <div>
                         <Container>
          <Form.Group>
            <Form.Label>class title:</Form.Label>
            <Form.Control name="class_title" placeholder={this.state.Class.class_title} onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>trainer :</Form.Label>
            <Form.Control name="trainer" placeholder={this.state.Class.trainer} onChange={this.changeHandler}  />
          </Form.Group>

          <Form.Group>
            <Form.Label>duration:</Form.Label>
            <Form.Control name="duration" placeholder={this.state.Class.duration}  onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>startAt:</Form.Label>
            <Form.Control name="startAt" placeholder={this.state.Class.startAt}  onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>date:</Form.Label>
            <Form.Control name="date" value={this.state.Class.date}  onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>description:</Form.Label>
            <Form.Control name="description" placeholder={this.state.Class.description}  onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>image:</Form.Label>
            <Form.Control name="image" value={this.state.Class.image}  onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>class type:</Form.Label>
            <Form.Control name="class_type" placeholder={this.state.Class.class_type}  onChange={this.changeHandler} />
          </Form.Group>

            
          <Button variant="primary" onClick={this.EditHandler} block>
            Edit Class 
          </Button>
        </Container>
            </div>
        )
    }
}
