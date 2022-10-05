import React, {Component} from "react";
import {WrapSkyper, SwiperReact, Wrap, WrapIcons} from './style'
import Home3 from './assets/images/home3.png'
import Home2 from './assets/images/home2.png'
import Home1 from './assets/images/home1.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

class Header extends Component {
    
    render() {
        return(
            <>
                <WrapSkyper>
                    <SwiperReact
                        pagination={{
                        dynamicBullets: true,
                        }}
                        modules={[ Pagination, Navigation]}
                        navigation={true} 
                        mousewheel={true} 
                        keyboard={true}
                        className="mySwiper"
                        >
                        <SwiperReact.Slide style={{backgroundImage: `url(${Home3})`}}>
                            <Wrap>
                                <Wrap.Header>Skyper Pool Partment</Wrap.Header>
                                <Wrap.Paragraph>112 Glenwood Ave Hyde Park, Boston, MA</Wrap.Paragraph>
                                <WrapIcons>
                                    <div>
                                    <WrapIcons.Bed />
                                    <Wrap.Paragraph>4 beds</Wrap.Paragraph>
                                    </div>
                                    <div>
                                    <WrapIcons.Bath />
                                    <Wrap.Paragraph>5 Baths</Wrap.Paragraph>
                                    </div>
                                    <div>
                                    <WrapIcons.Car />
                                    <Wrap.Paragraph>1 Garage</Wrap.Paragraph>
                                    </div>
                                    <div>
                                    <WrapIcons.Ruler />
                                    <Wrap.Paragraph>1200 Sq Ft</Wrap.Paragraph>
                                    </div>
                                </WrapIcons>
                                <Wrap.Price>$5,250/mo</Wrap.Price>
                                <Wrap.Button>Read more</Wrap.Button>
                            </Wrap>
                        </SwiperReact.Slide>
                        <SwiperReact.Slide style={{backgroundImage: `url(${Home2})`}}>
                        <Wrap>
                                <Wrap.Header>Skyper Pool Partment</Wrap.Header>
                                <Wrap.Paragraph>112 Glenwood Ave Hyde Park, Boston, MA</Wrap.Paragraph>
                                <WrapIcons>
                                    <div>
                                    <WrapIcons.Bed />
                                    <Wrap.Paragraph>4 beds</Wrap.Paragraph>
                                    </div>
                                    <div>
                                    <WrapIcons.Bath />
                                    <Wrap.Paragraph>5 Baths</Wrap.Paragraph>
                                    </div>
                                    <div>
                                    <WrapIcons.Car />
                                    <Wrap.Paragraph>1 Garage</Wrap.Paragraph>
                                    </div>
                                    <div>
                                    <WrapIcons.Ruler />
                                    <Wrap.Paragraph>1200 Sq Ft</Wrap.Paragraph>
                                    </div>
                                </WrapIcons>
                                <Wrap.Price>$5,250/mo</Wrap.Price>
                                <Wrap.Button>Read more</Wrap.Button>
                            </Wrap>
                        </SwiperReact.Slide>
                        <SwiperReact.Slide style={{backgroundImage: `url(${Home1})`}}>
                        <Wrap>
                                <Wrap.Header>Skyper Pool Partment</Wrap.Header>
                                <Wrap.Paragraph>112 Glenwood Ave Hyde Park, Boston, MA</Wrap.Paragraph>
                                <WrapIcons>
                                    <div>
                                    <WrapIcons.Bed />
                                    <Wrap.Paragraph>4 beds</Wrap.Paragraph>
                                    </div>
                                    <div>
                                    <WrapIcons.Bath />
                                    <Wrap.Paragraph>5 Baths</Wrap.Paragraph>
                                    </div>
                                    <div>
                                    <WrapIcons.Car />
                                    <Wrap.Paragraph>1 Garage</Wrap.Paragraph>
                                    </div>
                                    <div>
                                    <WrapIcons.Ruler />
                                    <Wrap.Paragraph>1200 Sq Ft</Wrap.Paragraph>
                                    </div>
                                </WrapIcons>
                                <Wrap.Price>$5,250/mo</Wrap.Price>
                                <Wrap.Button>Read more</Wrap.Button>
                            </Wrap>
                        </SwiperReact.Slide>
                    </SwiperReact>
                </WrapSkyper>
            </>
        )
    }
}
export default Header