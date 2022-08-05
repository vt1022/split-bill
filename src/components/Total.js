import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledTotal = styled.div``

export default function Total({ data }) {
    return (
        data && (
            <StyledTotal>
                <p>General: {data.general}</p>
                <p>Excluded: {data.excluded}</p>
            </StyledTotal>
        )
    )
}
