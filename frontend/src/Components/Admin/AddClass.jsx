import React, { Component } from 'react'

 import {Container,Form,Button,Card} from 'react-bootstrap';
import axios from "axios";


export default class ClassList extends Component {

 componentDidMount() {
 console.log("component ClassList running !!!")
 }

  state = {};

  registerHandler = async () => {
    try {
      let data = await axios.post(
        "http://localhost:5000/api/class/addClass",
        this.state
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  // deleteHandler = async () => {
  //   try {
  //     let data = await axios.delete(
  //       `http://localhost:5000/api/class/delete/${this.props.match.params.id}`,
  //       this.state
  //     );
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


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
               {/* <Card style={{ width: '18rem' }}></Card>
              <Card className="m-2" border="secondary"  style={{ width: '18rem', borderRadius: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>

  <Form.Group controlId="formBasicText">
    <Form.Label>Class Title</Form.Label>
    <Form.Control name="class_title"  placeholder="Enter Class Title" onChange={this.changeHandler}/>
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Trainer</Form.Label>
    <Form.Control name="trainer"  placeholder="Enter Trainer" onChange={this.changeHandler} />
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Start At :</Form.Label>
    <Form.Control name="startAt"  placeholder="Enter Start time"  onChange={this.changeHandler}/>
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>image :</Form.Label>
    <Form.Control  name="image"  placeholder="Enter image" onChange={this.changeHandler} />
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Duration</Form.Label>
    <Form.Control name="duration"   placeholder="Enter Duration" onChange={this.changeHandler}/>
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Date</Form.Label>
    <Form.Control name="date" placeholder="Enter Date" onChange={this.changeHandler}/>
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Class Type</Form.Label>
    <Form.Control name="class_type"  placeholder="Enter class type" onChange={this.changeHandler} />
  </Form.Group>

  <Form.Group controlId="formBasicText">
    <Form.Label>Description</Form.Label>
    <Form.Control name="description"  placeholder="Enter Description" onChange={this.changeHandler} />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={this.registerHandler}>
    Submit
  </Button>
</Card> */}



          {/* <Container>
          <Form.Group>
            <Form.Label>class title:</Form.Label>
            <Form.Control name="class_title" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>trainer :</Form.Label>
            <Form.Control name="trainer" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>duration:</Form.Label>
            <Form.Control name="duration" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>startAt:</Form.Label>
            <Form.Control name="startAt" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>date:</Form.Label>
            <Form.Control name="date" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>description:</Form.Label>
            <Form.Control name="description" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>image:</Form.Label>
            <Form.Control name="image" onChange={this.changeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label>class type:</Form.Label>
            <Form.Control name="class_type" onChange={this.changeHandler} />
          </Form.Group>

            
          <Button variant="primary" onClick={this.registerHandler} block>
            Add Class 
          </Button>
        </Container> */}



<Card>
  <Card.Body><Container className="m-0" style={{  borderRadius: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Form.Group>
            <Form.Label>class Title:</Form.Label>
            <Form.Control name="class_title" onChange={this.changeHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Trainer :</Form.Label>
            <Form.Control name="trainer" onChange={this.changeHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>duration:</Form.Label>
            <Form.Control name="duration" onChange={this.changeHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>StartAt:</Form.Label>
            <Form.Control name="startAt" onChange={this.changeHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date:</Form.Label>
            <Form.Control name="date" onChange={this.changeHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control name="description" onChange={this.changeHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image:</Form.Label>
            <Form.Control name="image" onChange={this.changeHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Label>class Type:</Form.Label>
            <Form.Control name="class_type" onChange={this.changeHandler} />
          </Form.Group>
          <Button variant="outline-success" style={{ width: 100 }} onClick={this.registerHandler} block> Add Class </Button>
          <Button variant="outline-danger" style={{ignItems: "right",width: 100 }} onClick={this.registerHandler} block> Delete</Button>
           </Container></Card.Body>
</Card>
            </div>
        )
    }
}
