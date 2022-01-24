import styled from '@emotion/styled'

export type FlexContainerProps = {
    /** Расстояние в пикселях между элементами */
    gap: number
}

export const FlexRowContainer = styled.div<FlexContainerProps>`
    display: flex;
    flex-direction: row;
    
    & > * {
        margin: 0 ${props => props.gap / 2}px;
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }
`

export const FlexColumnContainer = styled.div<FlexContainerProps>`
    display: flex;
    flex-direction: column;
    
    & > * {
        margin: ${props => props.gap / 2}px 0;
        &:first-child {
            margin-top: 0;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
`