import styled, {css} from "styled-components";
import '../index.css'
import {ReactComponent as carKey} from './assets/icons/car-key.svg'
import {ReactComponent as price} from './assets/icons/price.svg'
import {ReactComponent as settingLines} from './assets/icons/setting-lines.svg'
import {ReactComponent as search} from './assets/icons/001-loupe.svg'

const flex = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Container = styled.div`
    ${flex}
    width: 100%;
    height: 64px;
    background: var(--darkBlue);
    padding: 0 130px;

`
const Center = styled.div`
    ${flex}
    gap: 64px;
`
Center.Title = styled.h1`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--white)
`
const Header = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: 2px solid;
`
Header.Input = styled.input`
    width: 547px;
    height: 44px;
    border: 1px solid var(--grey);
    border-radius: 2px;
    outline: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--darkBlue);
    padding-left: 44px;
`
const Button = styled.button`
    width: 140px;
    height: 44px;
    border: 1px solid var(--grey);
    background: none;
    outline: none;
    border-radius: 2px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--darkBlue);
    position: relative;
    padding-left: 25px;
`
const SearchButton = styled.button`
    width: 180px;
    height: 44px;
    background: var(--lightBlue);
    border: 1px solid var(--lightBlue);
    border-radius: 2px;
    color: var(--white);
    position: relative;
    padding-left: 10px;
`
Button.CarKey = styled(carKey)`
    position: absolute;
    left: 30px;
`
Button.Price = styled(price)`
    position: absolute;
    left: 35px;
`
Button.SettingLines = styled(settingLines)`
    position: absolute;
    left: 25px;
`
SearchButton.Search = styled(search)`
    position: absolute;
    left: 50px;
`

export {Container, Center, Header, Button, SearchButton}