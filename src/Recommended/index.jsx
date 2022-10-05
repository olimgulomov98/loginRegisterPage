import React, { Component } from "react";
import '../index.css'
import {Container, SwiperReact, SwiperSlide1, Card, WrapIcons} from './style'
import Home1 from './assets/images/home1.png'
import Home2 from './assets/images/home2.png'
import Home3 from './assets/images/home3.png'
import Person1 from './assets/images/Person1.png'
import Person2 from './assets/images/Person2.png'
import Person3 from './assets/images/Person3.png'
import LeftIcon from './assets/icons/lefticon.png'



import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper';



class Recommended extends Component {
    render() {
        return(
            <Container>
                <Container.Header>Recommended</Container.Header>
                <Container.Paragraph>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Container.Paragraph>
                <SwiperReact pagination={true} navigation={true} modules={[Pagination, Navigation]} className='mySwiper'>
                    <SwiperSlide1>
                        <Card>
                            <Card.Img style={{backgroundImage: `url(${Home1})`}}>
                                <Card.Img.Button>FEATURED</Card.Img.Button>
                                <Card.Img.Button style={{backgroundColor: 'var(--darkBlue)'}}>FOR SALE</Card.Img.Button>
                                <Card.Img.Person src={Person1} alt="Person1"/>
                            </Card.Img>
                            <Card.Header>New Apartment Nice Wiew</Card.Header>
                            <Card.Paragraph>Quincy St, Brooklyn, NY, USA</Card.Paragraph>
                            <WrapIcons>
                                <div>
                                    <WrapIcons.Bed />
                                    <WrapIcons.Paragraph>4 beds</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Bath />
                                    <WrapIcons.Paragraph>5 Baths</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Car />
                                    <WrapIcons.Paragraph>1 Garage</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Ruler />
                                    <WrapIcons.Paragraph>1200 Sq Ft</WrapIcons.Paragraph>
                                </div>
                            </WrapIcons>
                            <Card.Footer>
                                <div>
                                    <Card.Paragraph>$2,800/mo</Card.Paragraph>
                                    <Card.Header>$7,500/mo</Card.Header>
                                </div>
                                <img src={LeftIcon} alt="LeftIcon" />
                            </Card.Footer>
                            
                        </Card>
                        <Card>
                            <Card.Img style={{backgroundImage: `url(${Home2})`}}>
                                <Card.Img.Button>FEATURED</Card.Img.Button>
                                <Card.Img.Button style={{backgroundColor: 'var(--darkBlue)'}}>FOR SALE</Card.Img.Button>
                                <Card.Img.Person src={Person2} alt="Person1"/>
                            </Card.Img>
                            <Card.Header>New Apartment Nice Wiew</Card.Header>
                            <Card.Paragraph>Quincy St, Brooklyn, NY, USA</Card.Paragraph>
                            <WrapIcons>
                                <div>
                                    <WrapIcons.Bed />
                                    <WrapIcons.Paragraph>4 beds</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Bath />
                                    <WrapIcons.Paragraph>5 Baths</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Car />
                                    <WrapIcons.Paragraph>1 Garage</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Ruler />
                                    <WrapIcons.Paragraph>1200 Sq Ft</WrapIcons.Paragraph>
                                </div>
                            </WrapIcons>
                            <Card.Footer>
                                <div>
                                    <Card.Paragraph>$2,800/mo</Card.Paragraph>
                                    <Card.Header>$7,500/mo</Card.Header>
                                </div>
                                <img src={LeftIcon} alt="LeftIcon" />
                            </Card.Footer>
                            
                        </Card>
                        <Card>
                            <Card.Img style={{backgroundImage: `url(${Home3})`}}>
                                <Card.Img.Button>FEATURED</Card.Img.Button>
                                <Card.Img.Button style={{backgroundColor: 'var(--darkBlue)'}}>FOR SALE</Card.Img.Button>
                                <Card.Img.Person src={Person3} alt="Person1"/>
                            </Card.Img>
                            <Card.Header>New Apartment Nice Wiew</Card.Header>
                            <Card.Paragraph>Quincy St, Brooklyn, NY, USA</Card.Paragraph>
                            <WrapIcons>
                                <div>
                                    <WrapIcons.Bed />
                                    <WrapIcons.Paragraph>4 beds</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Bath />
                                    <WrapIcons.Paragraph>5 Baths</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Car />
                                    <WrapIcons.Paragraph>1 Garage</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Ruler />
                                    <WrapIcons.Paragraph>1200 Sq Ft</WrapIcons.Paragraph>
                                </div>
                            </WrapIcons>
                            <Card.Footer>
                                <div>
                                    <Card.Paragraph>$2,800/mo</Card.Paragraph>
                                    <Card.Header>$7,500/mo</Card.Header>
                                </div>
                                <img src={LeftIcon} alt="LeftIcon" />
                            </Card.Footer>
                            
                        </Card>
                        
                    </SwiperSlide1>
                    <SwiperSlide1>
                        <Card>
                            <Card.Img style={{backgroundImage: `url(${Home3})`}}>
                                <Card.Img.Button>FEATURED</Card.Img.Button>
                                <Card.Img.Button style={{backgroundColor: 'var(--darkBlue)'}}>FOR SALE</Card.Img.Button>
                                <Card.Img.Person src={Person3} alt="Person1"/>
                            </Card.Img>
                            <Card.Header>New Apartment Nice Wiew</Card.Header>
                            <Card.Paragraph>Quincy St, Brooklyn, NY, USA</Card.Paragraph>
                            <WrapIcons>
                                <div>
                                    <WrapIcons.Bed />
                                    <WrapIcons.Paragraph>4 beds</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Bath />
                                    <WrapIcons.Paragraph>5 Baths</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Car />
                                    <WrapIcons.Paragraph>1 Garage</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Ruler />
                                    <WrapIcons.Paragraph>1200 Sq Ft</WrapIcons.Paragraph>
                                </div>
                            </WrapIcons>
                            <Card.Footer>
                                <div>
                                    <Card.Paragraph>$2,800/mo</Card.Paragraph>
                                    <Card.Header>$7,500/mo</Card.Header>
                                </div>
                                <img src={LeftIcon} alt="LeftIcon" />
                            </Card.Footer>
                            
                        </Card>
                        <Card>
                            <Card.Img style={{backgroundImage: `url(${Home1})`}}>
                                <Card.Img.Button>FEATURED</Card.Img.Button>
                                <Card.Img.Button style={{backgroundColor: 'var(--darkBlue)'}}>FOR SALE</Card.Img.Button>
                                <Card.Img.Person src={Person1} alt="Person1"/>
                            </Card.Img>
                            <Card.Header>New Apartment Nice Wiew</Card.Header>
                            <Card.Paragraph>Quincy St, Brooklyn, NY, USA</Card.Paragraph>
                            <WrapIcons>
                                <div>
                                    <WrapIcons.Bed />
                                    <WrapIcons.Paragraph>4 beds</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Bath />
                                    <WrapIcons.Paragraph>5 Baths</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Car />
                                    <WrapIcons.Paragraph>1 Garage</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Ruler />
                                    <WrapIcons.Paragraph>1200 Sq Ft</WrapIcons.Paragraph>
                                </div>
                            </WrapIcons>
                            <Card.Footer>
                                <div>
                                    <Card.Paragraph>$2,800/mo</Card.Paragraph>
                                    <Card.Header>$7,500/mo</Card.Header>
                                </div>
                                <img src={LeftIcon} alt="LeftIcon" />
                            </Card.Footer>
                            
                        </Card>
                        <Card>
                            <Card.Img style={{backgroundImage: `url(${Home2})`}}>
                                <Card.Img.Button>FEATURED</Card.Img.Button>
                                <Card.Img.Button style={{backgroundColor: 'var(--darkBlue)'}}>FOR SALE</Card.Img.Button>
                                <Card.Img.Person src={Person2} alt="Person1"/>
                            </Card.Img>
                            <Card.Header>New Apartment Nice Wiew</Card.Header>
                            <Card.Paragraph>Quincy St, Brooklyn, NY, USA</Card.Paragraph>
                            <WrapIcons>
                                <div>
                                    <WrapIcons.Bed />
                                    <WrapIcons.Paragraph>4 beds</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Bath />
                                    <WrapIcons.Paragraph>5 Baths</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Car />
                                    <WrapIcons.Paragraph>1 Garage</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Ruler />
                                    <WrapIcons.Paragraph>1200 Sq Ft</WrapIcons.Paragraph>
                                </div>
                            </WrapIcons>
                            <Card.Footer>
                                <div>
                                    <Card.Paragraph>$2,800/mo</Card.Paragraph>
                                    <Card.Header>$7,500/mo</Card.Header>
                                </div>
                                <img src={LeftIcon} alt="LeftIcon" />
                            </Card.Footer>
                            
                        </Card>
                        
                    </SwiperSlide1>
                    <SwiperSlide1>
                        <Card>
                            <Card.Img style={{backgroundImage: `url(${Home3})`}}>
                                <Card.Img.Button>FEATURED</Card.Img.Button>
                                <Card.Img.Button style={{backgroundColor: 'var(--darkBlue)'}}>FOR SALE</Card.Img.Button>
                                <Card.Img.Person src={Person3} alt="Person1"/>
                            </Card.Img>
                            <Card.Header>New Apartment Nice Wiew</Card.Header>
                            <Card.Paragraph>Quincy St, Brooklyn, NY, USA</Card.Paragraph>
                            <WrapIcons>
                                <div>
                                    <WrapIcons.Bed />
                                    <WrapIcons.Paragraph>4 beds</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Bath />
                                    <WrapIcons.Paragraph>5 Baths</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Car />
                                    <WrapIcons.Paragraph>1 Garage</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Ruler />
                                    <WrapIcons.Paragraph>1200 Sq Ft</WrapIcons.Paragraph>
                                </div>
                            </WrapIcons>
                            <Card.Footer>
                                <div>
                                    <Card.Paragraph>$2,800/mo</Card.Paragraph>
                                    <Card.Header>$7,500/mo</Card.Header>
                                </div>
                                <img src={LeftIcon} alt="LeftIcon" />
                            </Card.Footer>
                            
                        </Card>
                        <Card>
                            <Card.Img style={{backgroundImage: `url(${Home2})`}}>
                                <Card.Img.Button>FEATURED</Card.Img.Button>
                                <Card.Img.Button style={{backgroundColor: 'var(--darkBlue)'}}>FOR SALE</Card.Img.Button>
                                <Card.Img.Person src={Person2} alt="Person1"/>
                            </Card.Img>
                            <Card.Header>New Apartment Nice Wiew</Card.Header>
                            <Card.Paragraph>Quincy St, Brooklyn, NY, USA</Card.Paragraph>
                            <WrapIcons>
                                <div>
                                    <WrapIcons.Bed />
                                    <WrapIcons.Paragraph>4 beds</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Bath />
                                    <WrapIcons.Paragraph>5 Baths</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Car />
                                    <WrapIcons.Paragraph>1 Garage</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Ruler />
                                    <WrapIcons.Paragraph>1200 Sq Ft</WrapIcons.Paragraph>
                                </div>
                            </WrapIcons>
                            <Card.Footer>
                                <div>
                                    <Card.Paragraph>$2,800/mo</Card.Paragraph>
                                    <Card.Header>$7,500/mo</Card.Header>
                                </div>
                                <img src={LeftIcon} alt="LeftIcon" />
                            </Card.Footer>
                            
                        </Card>
                        <Card>
                            <Card.Img style={{backgroundImage: `url(${Home1})`}}>
                                <Card.Img.Button>FEATURED</Card.Img.Button>
                                <Card.Img.Button style={{backgroundColor: 'var(--darkBlue)'}}>FOR SALE</Card.Img.Button>
                                <Card.Img.Person src={Person1} alt="Person1"/>
                            </Card.Img>
                            <Card.Header>New Apartment Nice Wiew</Card.Header>
                            <Card.Paragraph>Quincy St, Brooklyn, NY, USA</Card.Paragraph>
                            <WrapIcons>
                                <div>
                                    <WrapIcons.Bed />
                                    <WrapIcons.Paragraph>4 beds</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Bath />
                                    <WrapIcons.Paragraph>5 Baths</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Car />
                                    <WrapIcons.Paragraph>1 Garage</WrapIcons.Paragraph>
                                </div>
                                <div>
                                    <WrapIcons.Ruler />
                                    <WrapIcons.Paragraph>1200 Sq Ft</WrapIcons.Paragraph>
                                </div>
                            </WrapIcons>
                            <Card.Footer>
                                <div>
                                    <Card.Paragraph>$2,800/mo</Card.Paragraph>
                                    <Card.Header>$7,500/mo</Card.Header>
                                </div>
                                <img src={LeftIcon} alt="LeftIcon" />
                            </Card.Footer>
                            
                        </Card>
                        
                    </SwiperSlide1>
                    

                </SwiperReact>
            </Container>
            
        )
    }
}
export default Recommended