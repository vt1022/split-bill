import React, { useEffect, useState } from 'react'
import './App.css'
import { Grid } from './AppStyled'
import ExcludeItems from './components/ExcludeItems'
import FlyingLabelInput from './components/FlyingLabelInput'

/* 
  bill total
  # of people
  exclusion items (drinks)
  # of people excluded
*/

function App() {
    /*** variables for FlyingLabelInput ***/
    const [subtotal, setSubtotal] = useState(0)
    const [tax, setTax] = useState(0)
    const [tip, setTip] = useState(0)
    const [totalPeople, setTotalPeople] = useState(0)
    const [peopleToExclude, setPeopleToExclude] = useState(0)

    const flyingLabelChangeHandler = (e, setState) => setState(e.target.value)

    /**********************************/

    /*** variables for ExcludeItems ***/
    const [numberOfItems, setNumberOfItems] = useState([])
    const [excludeItemsPrices, setExcludeItemsPrices] = useState([])

    const excludeItemsBtnHandler = (e, action, idx) => {
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

    return (
        <div className='App'>
            <div className='wrapper'>
                <h1>Split Calculator</h1>
                <Grid>
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
                    <FlyingLabelInput
                        value={tip}
                        changeHandler={e => flyingLabelChangeHandler(e, setTip)}
                        inputLabel='Tip'
                        inputId='tip'
                        inputType='number'
                    />
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
                <section className='grid'>
                    <ExcludeItems
                        excludeItemsPrices={excludeItemsPrices}
                        itemPriceChangeHandler={excludeItemChangeHandler}
                        numberOfItems={numberOfItems}
                        addRemoveBtnHandler={excludeItemsBtnHandler}
                    />
                </section>
            </div>
        </div>
    )
}

export default App
