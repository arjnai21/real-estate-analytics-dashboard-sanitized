import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VillaGardensLogo from './img/VillaGardensLogo.png';
import VitalStatisticsTable from './VitalStatisticsTable';
import InvestorReportInputBox from './InvestorReportInputBox';
import PLPerformanceTable from './PLPerformanceTable';
import Box from '@material-ui/core/Box';
import FloatingWidget from "./FloatingWidget";

interface InvestorReportEditorProps {

}

interface InvestorReportEditorState {

}

export default class InvestorReportEditor extends React.Component<InvestorReportEditorProps, InvestorReportEditorState> {
    constructor(props: InvestorReportEditorProps) {
        super(props);
    }

    render() {
        return <>
            <Box displayPrint="none">
                <img src={VillaGardensLogo} width={200} style={{display: "block", margin:"auto"}}/>
            </Box>
            <Box display="none" displayPrint="block">
                <img src={VillaGardensLogo} width={100} style={{display: "block", margin:"auto"}}/>
            </Box>
            <div style={{ width: '100%' }}>
                <Box display="flex" p={1} bgcolor="background.paper">
                    <Box p={1} flexGrow={1} style={{width: "33%"}}>
                        <VitalStatisticsTable />
                    </Box>
                    <Box p={1} flexGrow={1} style={{width: "67%"}}>
                        <InvestorReportInputBox header="Quarterly Report | July 2020 | Sponsor's Message" rows={15} />
                    </Box>
                </Box>
            </div>
            <div style={{ width: '100%' }}>
                <Box display="flex" p={1} bgcolor="background.paper">
                    <Box p={1} flexGrow={1} style={{width: "67%"}}>
                        <PLPerformanceTable />
                    </Box>
                    <Box p={1} flexGrow={1} style={{width: "33%"}}>
                        <InvestorReportInputBox header="Upcoming Guidance / Distribution / Admin Info" rows={11} />
                    </Box>
                </Box>
            </div>
            <Box displayPrint="none">
                <FloatingWidget onClick={() => {window.print()}} icon={'print'}/>
            </Box>
        </>
    }
}