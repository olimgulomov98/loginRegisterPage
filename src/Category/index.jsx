import React, { Component } from "react";
import {Container, SwiperReact, SwiperSlide1, Card} from './style'
import { data } from "./data";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: data
        }
    }
    render() {
        return(
            <Container>
                <Container.Header>Category</Container.Header>
                <Container.Paragraph>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Container.Paragraph>
                <SwiperReact pagination={true} navigation={true} modules={[Pagination, Navigation]} className='mySwiper'>
                    <SwiperSlide1>
                        {
                            this.state.card.map(({id, img, icon, title}) => (
                                <Card key={id} style={{backgroundImage: `url(${img})`}}>
                                    <Card.Img>
                                        <img src={icon} alt="Icons" />
                                    </Card.Img>
                                    <Card.Paragraph>{title}</Card.Paragraph>
                                </Card>
                            ))
                        }
                        
                    </SwiperSlide1>
                    <SwiperSlide1>
                        {
                            this.state.card.map(({id, img, icon, title}) => (
                                <Card key={id} style={{backgroundImage: `url(${img})`}}>
                                    <Card.Img>
                                        <img src={icon} alt="Icons" />
                                    </Card.Img>
                                    <Card.Paragraph>{title}</Card.Paragraph>
                                </Card>
                            ))
                        }
                        
                    </SwiperSlide1>
                    <SwiperSlide1>
                        {
                            this.state.card.map(({id, img, icon, title}) => (
                                <Card key={id} style={{backgroundImage: `url(${img})`}}>
                                    <Card.Img>
                                        <img src={icon} alt="Icons" />
                                    </Card.Img>
                                    <Card.Paragraph>{title}</Card.Paragraph>
                                </Card>
                            ))
                        }
                        
                    </SwiperSlide1>
                    <SwiperSlide1>
                        {
                            this.state.card.map(({id, img, icon, title}) => (
                                <Card key={id} style={{backgroundImage: `url(${img})`}}>
                                    <Card.Img>
                                        <img src={icon} alt="Icons" />
                                    </Card.Img>
                                    <Card.Paragraph>{title}</Card.Paragraph>
                                </Card>
                            ))
                        }
                        
                    </SwiperSlide1>
                </SwiperReact>
            </Container>
        )
    }
}
export default Category