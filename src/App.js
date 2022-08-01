import React from 'react'
import styled from 'styled-components'
import './App.css'
import ExcludeItems from './components/ExcludeItems'
import FlyingLabelInput from './components/FlyingLabelInput'

/* 
  bill total
  # of people
  exclusion items (drinks)
  # of people excluded
*/

const Grid = styled.section`
    display: grid;
    grid-gap: 1.6em;
`

function App() {
    return (
        <div className='App'>
            <div className='wrapper'>
                <h1>Split Calculator</h1>
                <Grid>
                    <FlyingLabelInput
                        inputLabel='Bill Subtotal (tax/tip excluded)'
                        inputId='bill-subtotal'
                        inputType='number'
                        hideArrows={true}
                    />
                    <FlyingLabelInput inputLabel='Tax %' inputId='tax' inputType='number' hideArrows={true} />
                    <FlyingLabelInput inputLabel='Tip' inputId='tip' inputType='number' hideArrows={true} />
                    <FlyingLabelInput inputLabel='# People' inputId='number-of-people' inputType='number' hideArrows={true} />
                    <FlyingLabelInput
                        inputLabel='# People to Exclude'
                        inputId='number-of-excluded'
                        inputType='number'
                        hideArrows={true}
                    />
                </Grid>
                <section className='grid'>
                    <ExcludeItems />
                </section>
            </div>
        </div>
    )
}

export default App
