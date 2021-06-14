import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface VitalStatisticsTableProps {

}

interface VitalStatisticsTableState {

}

export default class VitalStatisticsTable extends React.Component<VitalStatisticsTableProps, VitalStatisticsTableState> {
    constructor(props: VitalStatisticsTableProps) {
        super(props);
    }

    render() {
        return <>
            <TableContainer component={Paper} style={{"height": "100%"}}>
                <Table size={"small"}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={2} style={{backgroundColor: "darkred", color: "white"}}>Vital Statistics</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">Acquisition</TableCell>
                            <TableCell align="right">6/19/2018</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Occupancy (EOM)</TableCell>
                            <TableCell align="right">97.9%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Occupancy (pre-leased)</TableCell>
                            <TableCell align="right">97.2%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Purchase Price</TableCell>
                            <TableCell align="right">$10,825,000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">CapEx Budget + reserves</TableCell>
                            <TableCell align="right">$926,145</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">CapEx Spent to Date</TableCell>
                            <TableCell align="right">$845,262</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Generated CoC % (current period)</TableCell>
                            <TableCell align="right">9.2%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Distributed Coc % (current period)</TableCell>
                            <TableCell align="right">n/a</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Property Validation (@ 6.5% cap)</TableCell>
                            <TableCell align="right">$16,086,081</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    }
}