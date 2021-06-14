import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './NavBar';
import MainSwitch from './MainSwitch';
import Box from '@material-ui/core/Box';

interface MainRouterProps {

}

interface MainRouterState {
    tabsValue: number; 
}

export default class MainRouter extends React.Component<MainRouterProps, MainRouterState> {
    constructor(props : MainRouterProps) {
        super(props);
        this.setTabsValue = this.setTabsValue.bind(this);

        this.state = {tabsValue: 0};
    }

    setTabsValue(newValue: number) : void {
        this.setState({tabsValue: newValue});
    }

    render() {
        return <>
            <BrowserRouter>
                <Box displayPrint="none">
                    <NavBar tabsValue={this.state.tabsValue} setTabsValue={this.setTabsValue} />
                </Box>
                <MainSwitch />
            </BrowserRouter>
        </>
    }
}