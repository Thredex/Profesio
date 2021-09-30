import styled from 'styled-components'

export const Form = styled.form`
    width: clamp(20rem, 20vw, 80vw);
    margin: 0 auto;
`
export const Input = styled.input`
    width: 100%;
    border: 1px ${props => props.theme.text} solid;
    border-radius: 20px;
    margin-block: .3rem;
    padding: .3rem .6rem;
    &::placeholder {
        color: grey;
    }
`
export const SubmitButton = styled.input`
    border-radius: 20px;
    border: none;
    padding: .5rem 3rem;
    float: right;
    height: 1.95rem;
    background-color: ${props => props.theme.orange};
    color: #fff;
    cursor: pointer;
`
export const BackButton = styled.button`

`
export const SaveButton = styled.button`

`
export const Radio = styled.input`
    cursor: pointer;
    width: 15px;
    height: 15px;
    &:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #fff;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid ${props => props.theme.text};
    }
    &:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: ${props => props.theme.orange};
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid ${props => props.theme.text};
    }

`
export const MainHeading = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-weight: 100;
    color: ${props => props.theme.text};
    margin-top:-1rem;
`
export const Label = styled.label`
    font-weight: 100;
    width: 10rem;
    text-align: right;
    padding: 0 .5rem;
    color: ${props => props.theme.text};
`
export const Select = styled.select`
    width: 100%;
    border-radius: 20px;
    margin-block: .3rem;
    padding: .3rem .6rem;
    font-weight: 100;
`
export const Main = styled.main`
    height: 80vh;
    padding-top: 2rem;
`
export const Pol = styled.div`
    clip-path: polygon(100% 60%, 0% 100%, 100% 100%);
    min-height: 100vh;
    position: absolute;
    z-index: -1;
    width: 100%;
    top: 0%;
    right: 0;
    background-color: ${props => props.theme.orange};
    @media screen and (max-height: 540px) and (min-height: 0) {
        display: none;
    }
`
export const Pol2 = styled.div`
    clip-path: polygon(100% 0, 39% 0, 100% 27%);
    min-height: 100vh;
    position: absolute;
    z-index: -1;
    width: 100%;
    top: 0;
    right: 0;
    background-color: ${props => props.theme.orange};
    @media screen and (max-height: 540px) and (min-height: 0) {
        display: none;
    }
`