import styled from "styled-components";
import '../index.css'
import { Swiper, SwiperSlide } from 'swiper/react';

const Container = styled.div`
    width: 100%;
    padding: 96px 0;
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
    height: 420px;
    padding-bottom: 20px;
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
    width: 280px;
    height: 350px; 
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
`
Card.Img = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 140px;
    margin-bottom: 24px;
`
Card.Paragraph = styled.p`
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: var(--white);
`
export {Container, SwiperReact, SwiperSlide1, Card}