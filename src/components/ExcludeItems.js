import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledExcludeItems = styled.div`
    display: flex;
    align-items: center;
`
const StyledExcludeItem = styled.div``

export default function ExcludeItems() {
    const [numberOfItems, setNumberOfItems] = useState([])

    const btnHandler = (e, action) => {
        e.target.blur()
        const lastItem = prevState => prevState[prevState.length - 1]

        switch (action) {
            case 'add':
                setNumberOfItems(prevState => [...prevState, lastItem(prevState) + 1 || 0])
                return
            case 'remove':
                if (numberOfItems.length > 0) {
                    setNumberOfItems(prevState => prevState.filter(item => item !== lastItem(prevState)))
                }
                return
            default:
                return
        }
    }

    const removeItemHandler = () => {}

    const ExcludeItem = () => {
        return <StyledExcludeItem>test</StyledExcludeItem>
    }

    useEffect(() => {
        console.log('numberOfItems', numberOfItems)
    }, [numberOfItems])

    return (
        <>
            <StyledExcludeItems>
                <h3>Exclude Items</h3>
                <button className='btn--remove btn' onClick={e => btnHandler(e, 'remove')}>
                    -
                </button>
                <button className='btn--add btn' onClick={e => btnHandler(e, 'add')}>
                    +
                </button>
            </StyledExcludeItems>
            {numberOfItems.map((item, idx) => (
                <ExcludeItem key={idx} />
            ))}
        </>
    )
}
