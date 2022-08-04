import React from 'react'

export default function FlyingLabelInput({ value, changeHandler, inputLabel, inputId, inputType, hideArrows = true }) {
    const isNumberKey = e => {
        const charCode = e.which ? e.which : e.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) e.preventDefault()
    }
    
    return (
        <div className='flying-label-item'>
            {inputType === 'number' ? (
                <input
                    className={`flying-label-item__input ${hideArrows ? 'hide-arrows' : ''}`}
                    type={inputType}
                    name={inputId}
                    id={inputId}
                    value={value}
                    onChange={changeHandler}
                    onClick={e => e.target.select()}
                    onKeyPress={isNumberKey}
                    min='0'
                    pattern='[0-9]+'
                />
            ) : (
                <input
                    className={`flying-label-item__input`}
                    type={inputType}
                    name={inputId}
                    id={inputId}
                    value={value}
                    onChange={changeHandler}
                />
            )}
            <label className='flying-label-item__label' htmlFor={inputId}>
                {inputLabel}
            </label>
        </div>
    )
}
