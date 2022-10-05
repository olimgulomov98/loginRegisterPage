import styled from "styled-components";
import '../index.css'

const Container = styled.div`
    width: 100%;
    height: 434px;
    background: #F5F7FC;
    padding-top: 48px;
    padding-left: 120px;
    padding-right: 120px;
`
Container.Header = styled.h1`
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.02em;
    color: var(--darkBlue);
`
Container.Paragraph = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.02em;
    color: var(--darkGrey);
    margin-top: 8px;
`
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    margin-top: 40px;
`
const Card = styled.div`
    width: 25%;
    height: 230px;
`
Card.Header = styled.h1`
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: var(--darkBlue);
`
Card.Paragraph = styled.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    color: var(--darkGrey);
    margin-top: 8px;
`
Card.Img = styled.div`
  text-align: center;
  margin-bottom: 24px;
`
export {Container, Wrap, Card}