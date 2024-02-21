import {Card, Container, CardBody, CardHeader, Button, Row, Col, FormFeedback} from "reactstrap";
import Base from "../components/Base";
import { Label, Form, FormGroup, Input} from "reactstrap";
import { useState } from "react";
import { signUp } from "../services/user-service";
import { toast } from "react-toastify";
import background from "../images/register.jpg";


const Signup=()=>{

    const[data,setData]=useState({
        name:' ',
        email:' ',
        password:'',
        contact_no:'',
    });
    const[error,setError]=useState({
            errors:{},
            isError:false,
        });

    //handleChange
    const handleChange=(event,property)=>{

        //dynamic setting the values
        setData({...data,[property]:event.target.value})
    }

    //resetting the data
    const resetData=()=>{
        setData({
            name:'',
            email:'',
            contact_no:'',
            password:'',
            password2:'',
            
        })
    }

    //submit form
    const submitForm=(event)=>{
        event.preventDefault()

        // if(error.isError){
        //     toast.error("Data is Invalid!!");
        //     setError({...error,isError:false})
        //     return;
        // }

        console.log(data);
        //data validate



        //call server api for sending data
        signUp(data).then((resp)=>{
            console.log(resp)
            console.log("success log");
            toast.success("User is registered successfully!!")
            setData({
                name:'',
                email:'',
                contact_no:'',
                password:'',
                password2:'',
                
            })

        }).catch((error)=>{
            console.log(error);
            console.log("Error log");

            //handle errors in proper way
            setError({
                errors:error,
                isError:true,
            })

        });
    }



    return(
        <Base>
        <Container style={{backgroundImage:`url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </Container>

        <Container>
            <Row className="mt-4">
                <Col sm={{size:6, offset:3}} >
            <Card color="dark" outline>
                <CardHeader> 
                    <h3>Fill Information to Register!!!</h3>
                </CardHeader>

                <CardBody>
                    {/*creating Form*/}
                    {/*Name Field*/}
                    <Form onSubmit={submitForm}>
                        <FormGroup>
                            <Label for="name">Enter Name</Label>
                            <Input type="text" 
                                //    placeholder="Enter here"
                                   id="Name"
                                   onChange={(e)=>handleChange(e,'name')}
                                   value={data.name}
                                   //to access error msg
                                   invalid={error.errors?.response?.data?.name?true:false}/>

                                   <FormFeedback>
                                        {error.error?.response?.data?.name}
                                   </FormFeedback>
                        </FormGroup>

                    {/*Email Field*/}
                        <FormGroup>
                        <Label for="email">Enter Email</Label>
                        <Input type="email"
                            //    placeholder="Enter here"
                               id="Email"
                               onChange={(e)=>handleChange(e,'email')}
                               value={data.email}
                               invalid={error.errors?.response?.data?.email?true:false}/>

                                <FormFeedback>
                                        {error.error?.response?.data?.email}
                                </FormFeedback>
                        </FormGroup>

                    {/*Contact Number Field*/}
                        <FormGroup>
                        <Label for="contact_no">Mobile Number</Label>
                        <Input type="text"
                            //    placeholder="Enter here"
                               id="contact_no"
                               onChange={(e)=>handleChange(e,'contact_no')}
                               value={data.contact_no}
                               invalid={error.errors?.response?.data?.contact_no?true:false}/>

                                    <FormFeedback>
                                        {error.error?.response?.data?.contact_no}
                                    </FormFeedback>
                        </FormGroup>

                    {/*Password Field*/}
                        <FormGroup>
                        <Label for="Password">Enter Password</Label>
                        <Input type="password"
                            //    placeholder="Enter here"
                               id="password"
                               onChange={(e)=>handleChange(e,'password')}
                               value={data.password}
                               invalid={error.errors?.response?.data?.password?true:false}/>

                                <FormFeedback>
                                        {error.error?.response?.data?.password}
                                </FormFeedback>
                        </FormGroup>

                    {/*Confirm Password Field*/}
                    <FormGroup>
                        <Label for="Password2">Confirm Password</Label>
                        <Input type="password"
                            //    placeholder="Enter here"
                               id="password2"
                               onChange={(e)=>handleChange(e,'password2')}
                               value={data.password2}
                               invalid={error.errors?.response?.data?.password2?true:false}/>

                                <FormFeedback>
                                        {error.error?.response?.data?.password2}
                                </FormFeedback>
                        </FormGroup>

                    <Container className="text-center">
                        <Button color="dark">Register</Button>
                        <Button onClick={resetData} color="secondary" type="reset" className="ms-2">Reset</Button>
                    </Container>   
                    </Form>
                </CardBody>
            </Card>
            </Col>
            </Row>
        </Container>
        </Base>
    );
};

export default Signup