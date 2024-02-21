import {Button, Card,CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../services/user-service";
import { doLogin } from "../Auth";
import {useNavigate} from "react-router-dom"

const Login=()=>{

    const navigate=useNavigate()

    const[loginDetail,setLoginDetail]=useState({
        username:'',
        password:''
    })

    //setting login details
    const handleChange=(event,field)=>{
        let actualValue=event.target.value
        setLoginDetail({
            ...loginDetail,
            [field]:actualValue
        })
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(loginDetail);

        //validation
        if(loginDetail.username.trim()=='' || loginDetail.password.trim()=='')
        {
            toast.error("Username or Password is required");
            return;
        }

        //submit the data to server to generate token
        loginUser(loginDetail).then((data)=>{
            console.log("user login: ")
            console.log(data)

            //save the data to localstorage
            doLogin(data,()=>{
                console.log("login details is saved to localstorage")
                //redirect to user dashboard page
                    navigate("/user/dashboard")

            })
            toast.success("Login Success")
        }).catch(error=>{
            console.log(error)
            if(error.response.status==400 ||error.response.status==404)
            {
                toast.error(error.respose.data.message)
            }else{
                toast.error("Something went Wrong!!")
            }    
        })
    }

    //resetting
    const handleReset=()=>{
        setLoginDetail({
            username:'',
            password:'',
        });
    };


    return(
        <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm={
                        {
                            size:6,
                            offset:3
                        }
                    }>

                        <Card>
                            <CardHeader>
                                <h3>Login Here!!!</h3>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleFormSubmit}>
                                    {/*Email Field*/}
                                    <FormGroup>
                                        <Label for="Email">
                                            Enter Email
                                        </Label>
                                        <Input type="Text"
                                               id="email"
                                               value={loginDetail.username}
                                               onChange={(e)=>handleChange(e,'username')}/>
                                    </FormGroup>

                                    {/*Password Field*/}
                                    <FormGroup>
                                        <Label for="Password">
                                            Enter Password
                                        </Label>
                                        <Input type="Password"
                                               id="password"
                                               value={loginDetail.password}
                                               onChange={(e)=>handleChange(e,'password')}/>
                                    </FormGroup>

                                    <Container className="text-center" >
                                        <Button color="dark">
                                            Login
                                        </Button>
                                        <Button onClick={handleReset} className="ms-2" color="secondary">
                                            Reset
                                        </Button>
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

export default Login