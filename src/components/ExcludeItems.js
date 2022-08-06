import React from 'react'
import styled from 'styled-components'
import { Button, Grid } from '../AppStyled'
import { Input, Label, StyledFlyingLabelInput } from './FlyingLabelInput'

const StyledExcludeItems = styled.div`
    display: flex;
    align-items: center;
`

export default function ExcludeItems({ excludeItemsPrices, itemPriceChangeHandler, numberOfItems, addRemoveBtnHandler }) {
    const isNumberKey = e => {
        const charCode = e.which ? e.which : e.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) e.preventDefault()
    }

    const ExcludeItem = ({ idx }) => {
        return (
            <StyledFlyingLabelInput>
                <Input
                    className={`flying-label-item__input hide-arrows`}
                    type='number'
                    name={`exclude-item-${idx}`}
                    id={`exclude-item-${idx}`}
                    value={excludeItemsPrices[idx]}
                    onChange={e => itemPriceChangeHandler(e, idx)}
                    onClick={e => e.target.select()}
                    onKeyPress={isNumberKey}
                    min='0'
                    pattern='[0-9]+'
                />
                <Label className='flying-label-item__label' htmlFor={`exclude-item-${idx}`} value={excludeItemsPrices[idx]}>
                    item {idx + 1}
                </Label>
            </StyledFlyingLabelInput>
        )
    }

    return (
        <>
            <StyledExcludeItems>
                <h3>Exclude Items</h3>
                <Button className='btn--remove btn' onClick={e => addRemoveBtnHandler(e, 'remove')}>
                    -
                </Button>
                <Button className='btn--add btn' onClick={e => addRemoveBtnHandler(e, 'add')}>
                    +
                </Button>
            </StyledExcludeItems>
            {numberOfItems.map((item, idx) => (
                <ExcludeItem key={idx} idx={idx} />
            ))}
        </>
    )
}
