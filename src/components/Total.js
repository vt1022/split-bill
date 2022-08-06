import React from 'react'
import styled from 'styled-components'

const StyledTotal = styled.div``

export default function Total({ data }) {
    return (
        data && (
            <StyledTotal>
                {data.general !== 'NaN' && data.excluded !== 'NaN' ? (
                    <>
                        <p>General: {data.general}</p>
                        <p>Excluded: {data.excluded}</p>
                    </>
                ) : (
                    <p>Please make sure the numbers are correct</p>
                )}
            </StyledTotal>
        )
    )
}
