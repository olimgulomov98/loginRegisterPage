import React, {Component} from "react";
import HouzingLogo from './assets/images/houzingLogo.png'
import Login from './assets/images/login.png'
import {Container, Center, Header, Button, SearchButton} from './style'

class Navbar extends Component {
    
    render() {
        return(
            <>
            <Container>
                <img src= {HouzingLogo} alt="HouzingLogo" />
                <Center>
                    <Center.Title>Home</Center.Title>
                    <Center.Title>Properties</Center.Title>
                    <Center.Title>Contacts</Center.Title>
                </Center>
                <img src= {Login} alt="Login" />
            </Container>
            <Header> 
                <Header.Input type="text" placeholder="Enter an address, neighborhood, city, or ZIP code" />
                <Button><Button.CarKey />Status</Button>
                <Button><Button.Price />Price</Button>
                <Button><Button.SettingLines />Advanced</Button>
                <SearchButton><SearchButton.Search />Search</SearchButton>
            </Header>
            </>
        )
    }
}
export default Navbar