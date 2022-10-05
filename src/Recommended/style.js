import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../index.css'
import { ReactComponent as Bed } from './assets/icons/bed.svg'
import { ReactComponent as Bath } from './assets/icons/bath.svg'
import { ReactComponent as Car } from './assets/icons/car.svg'
import { ReactComponent as Ruler } from './assets/icons/ruler.svg'

const Container = styled.div`
    width: 100%;
    padding-top: 96px;
    margin-bottom: 30px;
`
Container.Header = styled.h1`
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: var(--darkBlue);
    text-align: center;
`
Container.Paragraph = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--darkGrey);
    margin-top: 8px;
    text-align: center;
`

const SwiperReact = styled(Swiper)`
    width: 100%;
    height: 517px;
`
const SwiperSlide1 = styled(SwiperSlide)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-left: 100px;
    padding-right: 100px;
`

const Card = styled.div`
    width: 380px;
    height: 429px;
    border: 1px solid var(--grey);
    border-radius: 3px;
    :hover{
        box-shadow: 8px 1px 20px var(--darkGrey);
    }
    :active{
        box-shadow: 8px 1px 20px var(--darkGrey);
    }
    
`
Card.Img = styled.div`
    width: 100%;
    height: 220px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
    margin-bottom: 24px;
    position: relative;
    
`
Card.Img.Button = styled.button`
    width: 73px;
    height: 23px;
    background-color: var(--lightBlue);
    color: var(--white);
    border: none;
    border-radius: 3px;
    font-weight: 600;
    font-size: 10px;
    line-height: 13px;

`
Card.Img.Person = styled.img`
    border: 2px solid white; 
    border-radius: 50%;
    position: absolute;
    right: 20px;
    bottom: -20px;
`
Card.Header = styled.h1`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--darkBlue);
    margin-left: 20px;
`
Card.Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--darkGrey);
    margin-left: 20px;
`
const WrapIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
    text-align: center;
    margin-top: 18px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--grey);
`
WrapIcons.Bed = styled(Bed)`

`
WrapIcons.Bath = styled(Bath)`

`
WrapIcons.Car = styled(Car)`

`
WrapIcons.Ruler = styled(Ruler)`

`
WrapIcons.Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--darkGrey);
`
Card.Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 12px;
    padding-top: 8px;
`
export {Container, SwiperReact, SwiperSlide1, Card, WrapIcons}