import React, { useContext, useState } from 'react'
import { AuthContext } from '../authContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import alertify from 'alertifyjs';
import {Button, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
export default function Login() {
  const[username, setUsetname] = useState('');
  const[password, setpassword] = useState('');
  const {setIsLoggedIn} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const user = response.data.find(u=>u.username ===username);

      if(user && password === "123456"){
        setIsLoggedIn(true);
        alertify.success("Giriş Başarılı!");
        navigate("/products");
      }else{
        alertify.error("Kullanıcı adı veya parola hatalı!");
      }
    })
    .catch(err=>{
      alertify.error("API Hatası meydana geldi!");
    })
  }
  return (
    <Container className='d-flex justify-content-center aling-items-center' style={{minHeight: '100vh'}}>
      <Row>
        <Col md="12">
          <CardBody>
            <CardTitle tag="h3" className='text-center mb-4'>Giriş Yap</CardTitle>
            <Form>
              <FormGroup>
                <Label for="username">Kullanıcı Adı</Label>
                <Input
                type='text'
                name='username'
                id='username'
                value={username}
                onChange={(e)=>setUsetname(e.target.value)}
                placeholder='Kullanıcı Adı'></Input>
                </FormGroup>
                <FormGroup>
                <Label for="password">Parola</Label>
                <Input
                type='text'
                name='password'
                id='password'
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                placeholder='Parola'></Input>
                </FormGroup>
                <Button color='primary' block onClick={handleLogin}>Giriş Yap</Button>
            </Form>
          </CardBody>
        </Col>
      </Row>
    </Container>
  )
}

