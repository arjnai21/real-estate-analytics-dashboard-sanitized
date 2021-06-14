import React from 'react';
import Grid from '@material-ui/core/Grid';
import FloatingSelectForm from './FloatingSelectForm';
import AdjustablePanel from './AdjustablePanel';
import DashboardSection from "./DashboardSection";

interface OperationsDashboardProps {

}

interface OperationsDashboardState {

}

export default class OperationsDashboard extends React.Component<OperationsDashboardProps, OperationsDashboardState> {

    state = {
        ventana: true,
        villa: true,
        cantera: true,
    }

    constructor(props: OperationsDashboardProps) {
        super(props);

        this.toggle_setting = this.toggle_setting.bind(this);
    }

    toggle_setting(property: String) {
        return () => {
            // @ts-ignore
            this.setState({ [property]: !Boolean(this.state[property]) });
        }
    }

    render() {
        return <>
            <Grid container spacing={3} style={{padding: 20}}>

                <DashboardSection title="Work Orders" description="Regarding property work orders filed by tenants at the selected properties.">
                    <Grid item xs={4} style={{height: "20em"}}>
                        <AdjustablePanel ventana={this.state.ventana} villa={this.state.villa} cantera={this.state.cantera} name={"Work Order Status"} />
                    </Grid>
                    <Grid item xs={4}>
                        <iframe src="http://18.117.26.1:3000/d-solo/ccUyZq-Mk/dashboard-that-actually-works?orgId=1&from=1613998121590&to=1614019721590&panelId=8" width="100%" height="100%" frameBorder="0" />
                    </Grid>
                </DashboardSection>

                <DashboardSection title="Budget" description="Regarding property spending, actual costs and planned budget.">
                    <Grid item xs={4}>
                        <iframe src="http://18.117.26.1:3000/d-solo/ccUyZq-Mk/dashboard-that-actually-works?orgId=1&from=1620072562294&to=1620094162294&panelId=42" width="100%" height="100%" frameBorder="0"/>
                    </Grid>

                    <Grid item xs={4}>
                        <iframe src="http://18.117.26.1:3000/d-solo/ccUyZq-Mk/dashboard-that-actually-works?orgId=1&from=1620072582234&to=1620094182234&panelId=44" width="100%" height="100%" frameBorder="0"/>
                    </Grid>

                    <Grid item xs={4} style={{height: "20em"}}>
                        <iframe src="http://18.117.26.1:3000/d-solo/ccUyZq-Mk/dashboard-that-actually-works?orgId=1&from=1620072591769&to=1620094191769&panelId=46" width="100%" height="100%" frameBorder="0"/>
                    </Grid>
                </DashboardSection>

                <DashboardSection title="Leases" description="Regarding current property occupancy and vacancy.">
                    <Grid item xs={4} style={{height: "20em"}}>
                        <iframe src="http://18.117.26.1:3000/d-solo/ccUyZq-Mk/dashboard-that-actually-works?orgId=1&from=1618769447424&to=1618791047424&panelId=23" width="100%" height="100%" frameBorder="0" />
                    </Grid>
                    <Grid item xs={4}>
                        <iframe src="http://18.117.26.1:3000/d-solo/ccUyZq-Mk/dashboard-that-actually-works?orgId=1&from=1618772208905&to=1618793808905&panelId=27" width="100%" height="100%" frameBorder="0" />
                    </Grid>
                    <Grid item xs={4}>
                        <iframe src="http://18.117.26.1:3000/d-solo/ccUyZq-Mk/dashboard-that-actually-works?orgId=1&from=1618815747208&to=1618837347208&panelId=29" width="100%" height="100%" frameBorder="0" />
                    </Grid>
                </DashboardSection>

                <DashboardSection title="Exposure" description="Regarding month-to-month tenant changes and potential risk.">
                    <Grid item xs={4} style={{height: "20em"}}>
                        <AdjustablePanel ventana={this.state.ventana} villa={this.state.villa} cantera={this.state.cantera} name={"Move Ins Per Month"} />
                    </Grid>
                    <Grid item xs={4}>
                        <iframe src="http://18.117.26.1:3000/d-solo/ccUyZq-Mk/dashboard-that-actually-works?orgId=1&from=1618526392049&to=1618547992049&panelId=19" width="100%" height="100%" frameBorder="0"></iframe>
                    </Grid>
                    <Grid item xs={4}>
                        <iframe src="http://18.117.26.1:3000/d-solo/ccUyZq-Mk/dashboard-that-actually-works?orgId=1&from=1618556889308&to=1618578489308&panelId=21" width="100%" height="100%"  frameBorder="0"></iframe>
                    </Grid>

                    <Grid item xs={4} style={{height: "20em"}}>
                        <AdjustablePanel ventana={this.state.ventana} villa={this.state.villa} cantera={this.state.cantera} name={"Month-to-Month Evictions"} />
                    </Grid>
                    <Grid item xs={4}>
                        <AdjustablePanel ventana={this.state.ventana} villa={this.state.villa} cantera={this.state.cantera} name={"Lease Expirations per Month"} />
                    </Grid>
                </DashboardSection>

                <DashboardSection title="Properties" description="General property information regarding units & residents.">
                    <Grid item xs={4} style={{height: '20em'}}>
                        <iframe src="http://18.117.26.1:3000/d-solo/ccUyZq-Mk/dashboard-that-actually-works?orgId=1&from=1613998150014&to=1614019750014&panelId=4" width="100%" height="100%" frameBorder="0" />
                    </Grid>
                    <Grid item xs={4}>
                        <iframe src="http://18.117.26.1:3000/d-solo/ccUyZq-Mk/dashboard-that-actually-works?orgId=1&from=1616749725954&to=1616771325954&panelId=13" width="100%" height="100%" frameBorder="0" />
                    </Grid>
                </DashboardSection>

            </Grid>
            <FloatingSelectForm settings={this.state} toggle_setting={this.toggle_setting} />
        </>
    }
}
