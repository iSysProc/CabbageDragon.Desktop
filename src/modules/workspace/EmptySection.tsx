import styled from '@emotion/styled'
import React, { useCallback } from 'react'

type Props = {
    parentId: string
    onClick: (parentId: string) => void
}

const EmptySectionStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    font-weight: bold;
    color: gray;
    cursor: pointer;

    &:hover {
        color: darkgray;
    }
`

const EmptySectionImpl: React.FC<Props> = ({ parentId, onClick }) => {
    const handleClick = useCallback(() => onClick(parentId), [onClick, parentId])

    return <EmptySectionStyled onClick={handleClick}>
        +
    </EmptySectionStyled>
}

export const EmptySection = React.memo(EmptySectionImpl)