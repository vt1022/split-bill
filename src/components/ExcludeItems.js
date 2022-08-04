import React from 'react'
import styled from 'styled-components'
import { Grid } from '../AppStyled'

const StyledExcludeItems = styled.div`
    display: flex;
    align-items: center;
`
const StyledExcludeItem = styled.div``

export default function ExcludeItems({ excludeItemsPrices, itemPriceChangeHandler, numberOfItems, addRemoveBtnHandler }) {
    const isNumberKey = e => {
        const charCode = e.which ? e.which : e.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) e.preventDefault()
    }
    const ExcludeItem = ({ idx }) => {
        return (
            <StyledExcludeItem>
                <input
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
                <label className='flying-label-item__label' htmlFor={`exclude-item-${idx}`}>
                    item {idx + 1}
                </label>
            </StyledExcludeItem>
        )
    }

    return (
        <>
            <StyledExcludeItems>
                <h3>Exclude Items</h3>
                <button className='btn--remove btn' onClick={e => addRemoveBtnHandler(e, 'remove')}>
                    -
                </button>
                <button className='btn--add btn' onClick={e => addRemoveBtnHandler(e, 'add')}>
                    +
                </button>
            </StyledExcludeItems>
            <Grid>
                {numberOfItems.map((item, idx) => (
                    <ExcludeItem key={idx} idx={idx} />
                ))}
            </Grid>
        </>
    )
}
