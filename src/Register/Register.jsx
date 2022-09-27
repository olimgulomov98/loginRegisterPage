import React, {Component} from "react";
import {Container, Head, Title, Input, Button, Paragraph} from './style'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: true
        }
    }
    render() {
        
        return(
            <Container>
                <Head>
                    <Head.Header onClick={() => this.props.onChange('login')}>Login</Head.Header>
                    <Head.Border></Head.Border>
                    <Head.Header style={{color: this.props.page === 'login' ? 'green' : 'green'}} onClick={() => this.props.onChange('register')}>Register</Head.Header>
                </Head>
                <Title>Enter your email and password to register.</Title>
                <Input type="text" placeholder="Username" />
                <Input type="email" placeholder="Enter your email address"/>
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password"/>
                <Button type="primary">Register</Button>
                
                <Paragraph>
                    <Paragraph.Border></Paragraph.Border>
                    <Paragraph.P>Or register with</Paragraph.P>
                    <Paragraph.Border></Paragraph.Border>
                </Paragraph>
                <Button type="secondary"><FcGoogle style={{position: "absolute", left: '79px', bottom: '9px', fontSize: ' 20px'}} /> Continue with Google</Button>
                <Button type="secondary"><FaFacebookF style={{position: "absolute", left: '79px', bottom: '9px', paddingRight: '5px', fontSize: ' 20px', color: '#3B5999'}} /> Continue with Facebook</Button> 
            </Container>
        )
    }
}
export default Register