import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Index = () => {
    return <div className="">
        <div>Hello React!</div>
        <div>{(window as any).gateway.versionOf('chrome')}</div>
        <div>{(window as any).gateway.versionOf('node')}</div>
        <div>{(window as any).gateway.versionOf('electron')}</div>
    </div>;
};
 
ReactDOM.render(<Index />, document.getElementById('app'));