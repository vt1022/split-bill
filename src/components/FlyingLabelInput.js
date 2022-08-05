import React from 'react'
import styled, { css } from 'styled-components'

const color1 = '#fff'
const color2 = '#000'
const color3 = 'brown'
const color4 = '#c0ffee'
const color5 = 'red'

export const sharedLabelInput = css`
    border-radius: 3px;
    font-size: 12px;
    transition: all 0.3s ease-in;
`

export const validLabel = css`
    font-size: 9px;
    border-radius: 0 3px 3px 0;
    border-right: 1px solid transparent;
    top: -50%;
    left: 0;
`

export const StyledFlyingLabelInput = styled.div`
    position: relative;
`

export const Input = styled.input`
    ${sharedLabelInput}
    position: relative;
    margin: 5px 0;
    width: 100%;
    padding: 4px 6px;
    background: ${color1};

    &:focus {
        outline: none;

        + label {
            font-size: 9px;
            border-radius: 0 3px 3px 0;
            border-right: 1px solid transparent;
            top: -50%;
            left: 0;
        }
    }
`

export const Label = styled.label`
    ${sharedLabelInput}
    display: flex;
    border-left: 1px solid $light-brown;
    border-right: 1px solid $light-brown;
    border-radius: 3px 0 0 3px;
    width: auto;
    height: 26px;
    padding: 0 5px;
    align-items: center;

    position: absolute;
    top: 5px;
    left: 0;
    white-space: nowrap;

    ${props => Boolean(props.value) && validLabel}
`

export default function FlyingLabelInput({ value, changeHandler, inputLabel, inputId, inputType, hideArrows = true }) {
    const isNumberKey = e => {
        const charCode = e.which ? e.which : e.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) e.preventDefault()
    }

    return (
        <StyledFlyingLabelInput>
            {inputType === 'number' ? (
                <Input
                    className={`flying-label-item__input ${hideArrows ? 'hide-arrows' : ''}`}
                    type={inputType}
                    name={inputId}
                    id={inputId}
                    value={value}
                    onChange={changeHandler}
                    onKeyPress={isNumberKey}
                    min='0'
                    pattern='[0-9]+'
                    required
                />
            ) : (
                <Input
                    className={`flying-label-item__input`}
                    type={inputType}
                    name={inputId}
                    id={inputId}
                    value={value}
                    onChange={changeHandler}
                />
            )}
            <Label className='flying-label-item__label' htmlFor={inputId} value={value}>
                {inputLabel}
            </Label>
        </StyledFlyingLabelInput>
    )
}
