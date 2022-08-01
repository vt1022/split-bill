import React from 'react'

export default function FlyingLabelInput({ inputLabel, inputId, inputType, hideArrows }) {
    return (
        <div className='flying-label-item'>
            <input
                className={`flying-label-item__input ${hideArrows ? 'hide-arrows' : ''}`}
                type={inputType}
                name={inputId}
                id={inputId}
                value={''}
                onChange={''}
                required
            />
            <label className='flying-label-item__label' htmlFor={inputId}>
                {inputLabel}
            </label>
        </div>
    )
}
