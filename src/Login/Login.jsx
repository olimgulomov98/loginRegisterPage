import React, {Component} from "react";
import {Container, Head, Title, Input, Button, Paragraph,} from './style'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'


class Login extends Component {
    
    render() {
        return(
            <Container>
                <Head>
                    <Head.Header style={{color: this.props.page === 'login' ? 'green' : 'green'}} onClick={() => this.props.onChange('login')}>Login</Head.Header>
                    <Head.Border></Head.Border>
                    <Head.Header onClick={() => this.props.onChange('register')}>Register</Head.Header>
                </Head>
                <Title>Enter your username and password to login.</Title>
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password"/>
                <Button type="primary">Login</Button>
                
                <Paragraph>
                    <Paragraph.Border></Paragraph.Border>
                    <Paragraph.P>Or login with</Paragraph.P>
                    <Paragraph.Border></Paragraph.Border>
                </Paragraph>
                <Button type="secondary"><FcGoogle style={{position: "absolute", left: '79px', bottom: '9px', fontSize: ' 20px'}} /> Login with Google</Button>
                <Button type="secondary"><FaFacebookF style={{position: "absolute", left: '79px', bottom: '9px', paddingRight: '5px', fontSize: ' 20px', color: '#3B5999'}} /> Login with Facebook</Button> 
            </Container>
        )
    }
}
export default Login