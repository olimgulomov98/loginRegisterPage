import styled from "styled-components";
import '../index.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Bed } from './assets/icons/bed.svg'
import { ReactComponent as Bath } from './assets/icons/bath.svg'
import { ReactComponent as Car } from './assets/icons/car.svg'
import { ReactComponent as Ruler } from './assets/icons/ruler.svg'


const WrapSkyper = styled.div`
    width: 100%;
    height: 571px;
`
const SwiperReact = styled(Swiper)`
    width: 100%;
    height: 100%;
`
SwiperReact.Slide = styled(SwiperSlide)`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
`
const Wrap = styled.div`
    text-align: center;
    background: transparent;
`
Wrap.Header = styled.h1`
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: -0.02em;
    color: var(--white);
    margin: 134px 0 8px 0;
`
Wrap.Paragraph = styled.p`
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: var(--white);
    margin-bottom: 24px;
`
Wrap.Price = styled.h1`
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: var(--white);
    margin: 24px 0 40px 0;
`
Wrap.Button = styled.button`
    width: 180px;
    height: 44px;
    background: none;
    border: 1px solid var(--white);
    border-radius: 2px;
    color: var(--white);
`
const WrapIcons = styled.div`
   display: flex;
   gap: 24px;
   justify-content: center;
   align-items: center;
`
WrapIcons.Bed = styled(Bed)`

`
WrapIcons.Bath = styled(Bath)`

`
WrapIcons.Car = styled(Car)`

`
WrapIcons.Ruler = styled(Ruler)`

`

export {WrapSkyper, SwiperReact, Wrap, WrapIcons}