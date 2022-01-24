import { css, Global } from '@emotion/react'
import { Workspace } from 'modules/workspace/Workspace'
import React from 'react'
import ReactDOM from 'react-dom'

const App: React.FC = () => {
    return (
        <>
            <Global styles={css`
                body, #root {
                    margin: 0;
                    width: 100vw;
                    height: 100vh;
                }
            `} />
            <Workspace editing mainSection={{
                    id: '11',
                    size: 1,
                    direction: 'row',
                    content: [
                        {
                            id: '112',
                            size: 1,
                            direction: 'column',
                            content: [
                                {
                                    id: '115',
                                    size: 1,
                                    direction: 'column',
                                    content: [
                                        {
                                            id: '112',
                                            size: 1,
                                            direction: 'column',
                                            content: [
                                                {
                                                    id: '115',
                                                    size: 1,
                                                    direction: 'row',
                                                    content: undefined
                                                },
                                                {
                                                    id: '112',
                                                    size: 1,
                                                    direction: 'column',
                                                    content: [
                                                        {
                                                            id: '115',
                                                            size: 1,
                                                            direction: 'row',
                                                            content: <div>3123</div>
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: '112',
                                    size: 1,
                                    direction: 'column',
                                    content: [
                                        {
                                            id: '115',
                                            size: 1,
                                            direction: 'row',
                                            content: <div>115</div>
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: '113',
                            size: 1,
                            direction: 'column',
                            content: [
                                {
                                    id: '111',
                                    size: 1,
                                    direction: 'row',
                                    content: [
                                        {
                                            id: '112',
                                            size: 1,
                                            direction: 'column',
                                            content: [
                                                {
                                                    id: '115',
                                                    size: 1,
                                                    direction: 'row',
                                                    content: undefined
                                                }
                                            ]
                                        },
                                        {
                                            id: '112',
                                            size: 1,
                                            direction: 'column',
                                            content: [
                                                {
                                                    id: '115',
                                                    size: 1,
                                                    direction: 'row',
                                                    content: [
                
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))