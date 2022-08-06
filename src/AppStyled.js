import styled, { css } from 'styled-components'

export const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 580px;
    margin: 10px auto;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const Grid = styled.section`
    display: grid;
    grid-gap: 1.6em;
    grid-template-rows: calc(27px + 1.6em);
    min-width: 250px;

    ${props =>
        props.variant === 'info' &&
        css`
            height: min-content;
        `}

    ${props =>
        props.variant === 'exclude-items' &&
        css`
            align-self: start;
        `}
`

export const Flex = styled.div`
    display: flex;
`

export const Button = styled.button`
    margin-top: auto;
    margin-bottom: auto;
    height: 2em;
    min-width: 2.1em;
`
export const StyledCalculate = styled(Button)`
    width: max-content;
`
