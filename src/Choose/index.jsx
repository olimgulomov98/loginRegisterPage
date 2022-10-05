import React, { Component } from "react";
import { Container, Wrap, Card } from "./style";
import Discord from './assets/images/discord.png'
import data from './data'

class Choose extends Component {
    constructor(props){
        super(props);
        this.state = {
            card: data
        }
        console.log(this);
    }
    
    render() {
        return(
            <Container>
                <Container.Header>Why Choose Us?</Container.Header>
                <Container.Paragraph>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Container.Paragraph>
                <Wrap>
                    {
                        this.state.card.map(({id, img, title, parag}) => (
                            <Card key={id}>
                                <Card.Img>
                                    <img src={img} alt="Icons" />
                                </Card.Img>
                                <Card.Header>{title}</Card.Header>
                                <Card.Paragraph>{parag}</Card.Paragraph>
                            </Card>
                        ))
                    }
                    
                </Wrap>
            </Container>
        )
    }
}
export default Choose