import React, {useState, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Col, Input,  CardImg } from 'reactstrap';

import axios from 'axios'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Container, Row } from 'reactstrap';
import { AuthContext } from '../App';
const qs = require('querystring')
const api = 'https://localhost:3001'

function LoginComp() {
    const { dispatch } = useContext(AuthContext)
    const initialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    }

    const [data, setData] = useState(initialState)

    const handleInputChange = event => {
         setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const handleformSubmit = event => {
        event.preventDefault()
        setData({
            ...data,
            isSubmiting: true,
            errorMessage: null
        })
        const requestBody = {
            email: data.email,
            password: data.password
        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post(api + '/auth/api/v1/login', qs.stringify(requestBody), config)
            .then(res=>{
                if (res.data.success === true) {
                    dispatch({
                        type: "LOGIN",
                        payload: res.data
                    })
                }
                else {
                    setData({
                        ...data,
                        isSubmiting: false,
                        errorMessage: res.data.Message
                    })

                }
                throw res
            })
    }
    return (
        <Fragment>
        <Container>
            <br />
            <Row>
                <Col>
                    <CardImg width="100" src="https://cdn.borlabs.io/wp-content/uploads/2019/09/blog-wp-login.png" />
                </Col>
                <Col>

                    <Form onSubmit={handleformSubmit}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" 
                                value={data.email}
                                onChange={handleInputChange}
                                name="email" id="exampleEmail"
                                placeholder="Masukan Email" />
                            </FormGroup>

                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password"
                                value={data.password}
                                onChange={handleInputChange}
                                name="password" id="examplePassword" placeholder="Masukan Password" />
                        </FormGroup>

                        {data.errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {data.errorMessage}
                            </div>
                        )}
                        <Button disabled={data.isSubmiting}>
                            {data.isSubmiting ? (
                                "..Loading"
                             ) :
                            (
                                "Login"
                            )
                            
                            }
                            </Button>
                    </Form>
                    <p>Belum Punya akun? <Link to="/register">Register</Link> </p>
                </Col>

            </Row>
        </Container>
        </Fragment>
    )
}
export default LoginComp;