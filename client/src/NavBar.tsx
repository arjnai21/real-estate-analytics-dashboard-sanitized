import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import './NavBar.css';

interface NavBarProps {
    tabsValue: number;
    setTabsValue: (newValue: number) => void;
}

interface NavBarState {

}

export default class NavBar extends React.Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);

        this.handleTabsChange = this.handleTabsChange.bind(this);
    }

    handleTabsChange(event: object, value: any) : void {
        this.props.setTabsValue(value);
    }

    a11yProps(index: any) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

     render() {
        return <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{flexGrow: 1}}>
                        Real Estate Analytics Dashboard
                        <button type="submit">Sync</button>
                    </Typography>
             
                    <Tabs value={this.props.tabsValue} onChange={this.handleTabsChange}>
                        <Tab label="Operations" {...this.a11yProps(0)} component={Link} to="/operations"/>
                        <Tab label="Financials" {...this.a11yProps(1)} component={Link} to="/financials" />
                        <Tab label="Analysis" {...this.a11yProps(2)} component={Link} to="/analysis" />
                        <Tab label="Investor Report" {...this.a11yProps(3)} component={Link} to="/investorreport" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    }
}