import styled from '@emotion/styled'
import React, { Fragment } from 'react'
import { EmptySection } from './EmptySection'

type Section = {
    id: string
    size: number
    direction: 'row' | 'column'
    content?: Section[] | React.ReactNode
}

type Props = {
    editing: boolean
    mainSection: Section
}

const Divider = styled.div<{ direction: 'row' | 'column' }>`
    background-color: red;
    ${props => props.direction === 'column' ? 'height: 3px;' : 'width: 3px;'}
`

const StyledSection = styled.div<Section>`
    display: flex;
    flex: 1;
    flex-grow: ${props => props.size};
    flex-direction: ${props => props.direction};
    width: 100%;
    height: 100%;
`



const isEmpty = (content?: Section[] | React.ReactNode): content is undefined => typeof content === 'undefined'
const isArray = (content?: Section[] | React.ReactNode): content is Section[] => Array.isArray(content)
const isContent = (content?: Section[] | React.ReactNode): content is React.ReactNode => typeof content !== 'undefined' && !Array.isArray(content)

const WorkspaceImpl: React.FC<Props> = ({ editing, mainSection }) => {
    return <StyledSection {...mainSection}>
        {isEmpty(mainSection.content) && <EmptySection parentId={mainSection.id} onClick={console.log} />}
        {isArray(mainSection.content) && (
            mainSection.content.map((section, index) => (
                <Fragment key={section.id}>
                    {index > 0 && <Divider direction={mainSection.direction} />}
                    <Workspace
                        editing={editing}
                        mainSection={section}
                    />
                </Fragment>
            ))
        )}
        {isContent(mainSection.content) && mainSection.content}
    </StyledSection>
}

export const Workspace = React.memo(WorkspaceImpl)