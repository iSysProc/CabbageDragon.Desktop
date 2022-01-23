import React from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { FlexColumnContainer, FlexRowContainer } from 'components/FlexContainer'

const Button = styled.button<{ primary: boolean }>`
  color:  ${props =>
        props.primary ? 'hotpink' : 'turquoise'};
`

const App: React.FC = () => {
    return (
        <>
            <div>{window.gateway.getVersionOff('chrome')}</div>
            <FlexColumnContainer gap={20}>
                <FlexRowContainer gap={10}>
                    <Button primary>button</Button>
                    <Button primary>button</Button>
                    <Button primary>button</Button>
                    <Button primary={false}>button</Button>
                </FlexRowContainer>
                <FlexRowContainer gap={10}>
                    <Button primary>button</Button>
                    <Button primary>button</Button>
                    <Button primary>button</Button>
                    <Button primary={false}>button</Button>
                </FlexRowContainer>
                <FlexRowContainer gap={10}>
                    <Button primary>button</Button>
                    <Button primary>button</Button>
                    <Button primary>button</Button>
                    <Button primary={false}>button</Button>
                </FlexRowContainer>
                <FlexRowContainer gap={10}>
                    <Button primary>button</Button>
                    <Button primary>button</Button>
                    <Button primary>button</Button>
                    <Button primary={false}>button</Button>
                </FlexRowContainer>
            </FlexColumnContainer>
        </>
    )
};

ReactDOM.render(<App />, document.getElementById('root'))