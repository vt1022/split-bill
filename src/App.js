import React, { useState } from 'react'
import './App.css'
import { StyledCalculate, Button, Flex, Grid, Wrapper, StyledApp } from './AppStyled'
import ExcludeItems from './components/ExcludeItems'
import FlyingLabelInput from './components/FlyingLabelInput'
import Total from './components/Total'

/* 
  bill total
  # of people
  exclusion items (drinks)
  # of people excluded
*/

function App() {
    /*** variables for FlyingLabelInput ***/
    const [subtotal, setSubtotal] = useState('')
    const [tax, setTax] = useState('')
    const [tip, setTip] = useState('')
    const [tipUnit, setTipUnit] = useState('%')
    const [totalPeople, setTotalPeople] = useState('')
    const [peopleToExclude, setPeopleToExclude] = useState('')

    const flyingLabelChangeHandler = (e, setState) => setState(e.target.value ? Number(e.target.value) : e.target.value)

    /**********************************/

    /*** variables for ExcludeItems ***/
    const [numberOfItems, setNumberOfItems] = useState([])
    const [excludeItemsPrices, setExcludeItemsPrices] = useState([])

    const excludeItemsBtnHandler = (e, action) => {
        e.target.blur()
        const lastItem = prevState => prevState[prevState.length - 1]
        switch (action) {
            case 'add':
                setNumberOfItems(prevState => [...prevState, lastItem(prevState) + 1 || 0])
                return
            case 'remove':
                if (numberOfItems.length > 0) {
                    setNumberOfItems(prevState => prevState.filter(item => item !== lastItem(prevState)))
                    setExcludeItemsPrices(prevState => prevState.filter(item => item !== lastItem(prevState)))
                }
                return
        }
    }
    const excludeItemChangeHandler = (e, idx) => {
        setExcludeItemsPrices(prevState => {
            prevState[idx] = e.target.value
            return prevState
        })
    }
    /**********************************/

    /*** variables for Results Calculation ***/
    const [result, setResult] = useState(null)
    const calculateResult = () => {
        // if (subtotal === '' || totalPeople === '') return

        const sumOfExcludeItems = excludeItemsPrices.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)

        const finalTip = tipUnit === '$' || tip <= 0 ? tip : subtotal * (1 + tax / 100) * (1 + tip / 100) - subtotal

        const exclude = ((subtotal - sumOfExcludeItems) * (1 + tax / 100) + finalTip) / totalPeople

        setResult({
            general: ((sumOfExcludeItems * (1 + tax / 100)) / (totalPeople - peopleToExclude) + exclude).toFixed(2),
            excluded: exclude.toFixed(2)
        })
    }
    /**********************************/

    return (
        <StyledApp>
            <h1>Split Calculator</h1>
            <Wrapper>
                <Grid variant='info'>
                    <FlyingLabelInput
                        value={subtotal}
                        changeHandler={e => flyingLabelChangeHandler(e, setSubtotal)}
                        inputLabel='Bill Subtotal (tax/tip excluded)'
                        inputId='bill-subtotal'
                        inputType='number'
                    />
                    <FlyingLabelInput
                        value={tax}
                        changeHandler={e => flyingLabelChangeHandler(e, setTax)}
                        inputLabel='Tax %'
                        inputId='tax'
                        inputType='number'
                    />
                    <Flex>
                        <FlyingLabelInput
                            value={tip}
                            changeHandler={e => flyingLabelChangeHandler(e, setTip)}
                            inputLabel='Tip'
                            inputId='tip'
                            inputType='number'
                        />
                        <Button onClick={() => setTipUnit(tipUnit === '%' ? '$' : '%')}>{tipUnit}</Button>
                    </Flex>
                    <FlyingLabelInput
                        value={totalPeople}
                        changeHandler={e => flyingLabelChangeHandler(e, setTotalPeople)}
                        inputLabel='# People'
                        inputId='number-of-people'
                        inputType='number'
                    />
                    <FlyingLabelInput
                        value={peopleToExclude}
                        changeHandler={e => flyingLabelChangeHandler(e, setPeopleToExclude)}
                        inputLabel='# People to Exclude'
                        inputId='number-of-excluded'
                        inputType='number'
                    />
                </Grid>
                <Grid variant='exclude-items'>
                    <ExcludeItems
                        excludeItemsPrices={excludeItemsPrices}
                        itemPriceChangeHandler={excludeItemChangeHandler}
                        numberOfItems={numberOfItems}
                        addRemoveBtnHandler={excludeItemsBtnHandler}
                    />
                </Grid>
            </Wrapper>
            <Grid>
                <h3>Result</h3>
                <StyledCalculate onClick={calculateResult}>Calculate</StyledCalculate>
                <Total data={result} />
            </Grid>
        </StyledApp>
    )
}

export default App
