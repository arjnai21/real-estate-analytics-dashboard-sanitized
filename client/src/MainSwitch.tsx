import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import InvestorReportEditor from './components/InvestorReportEditor';
import OperationsDashboard from './components/OperationsDashboard';

interface MainSwitchProps {

}

interface MainSwitchState {

}

export default class MainSwitch extends React.Component<MainSwitchProps, MainSwitchState> {
    constructor(props: MainSwitchProps) {
        super(props);
    }

    render() {
        return <>
            <Switch>
                <Route path="/operations">
                    <OperationsDashboard />
                </Route>
                <Route path="/financials">

                </Route>
                <Route path="/analysis">

                </Route>
                <Route path="/investorreport">
                    <InvestorReportEditor />
                </Route>
            </Switch>
        </>
    }
}
