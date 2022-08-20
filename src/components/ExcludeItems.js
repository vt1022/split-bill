import React from 'react'
import styled from 'styled-components'
import { Button, Flex } from '../AppStyled'
import { Input, Label, StyledFlyingLabelInput } from './FlyingLabelInput'

const StyledExcludeItems = styled.div`
    display: flex;
    align-items: center;
`

export default function ExcludeItems({
    excludeItems,
    itemPriceChangeHandler,
    addRemoveBtnHandler
}) {
    const isNumberKey = e => {
        const charCode = e.which ? e.which : e.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) e.preventDefault()
    }

    return (
        <>
            <StyledExcludeItems>
                <h3>Exclude Items</h3>
                <Button className='btn--add btn' onClick={e => addRemoveBtnHandler(e, 'add')}>
                    +
                </Button>
            </StyledExcludeItems>
            {excludeItems.map((item, idx) => (
                <Flex key={idx}>
                    <StyledFlyingLabelInput>
                        <Input
                            className={`flying-label-item__input hide-arrows`}
                            type='number'
                            name={`exclude-item-${idx}`}
                            id={`exclude-item-${idx}`}
                            value={item}
                            onChange={e => itemPriceChangeHandler(e, idx)}
                            onClick={e => e.target.select()}
                            onKeyPress={isNumberKey}
                            min='0'
                            pattern='[0-9]+'
                            required
                        />
                        <Label className='flying-label-item__label' htmlFor={`exclude-item-${idx}`} value={item}>
                            item {idx + 1}
                        </Label>
                    </StyledFlyingLabelInput>
                    <Button className='btn--remove btn' onClick={e => addRemoveBtnHandler(e, 'remove', idx)}>
                        -
                    </Button>
                </Flex>
            ))}
        </>
    )
}
