import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface PLPerformanceTableProps {

}

interface PLPerformanceTableState {
    rows: any;
}

export default class PLPerformanceTable extends React.Component<PLPerformanceTableProps, PLPerformanceTableState> {
    constructor(props: PLPerformanceTableProps) {
        super(props);
    }

    componentDidMount() {
        fetch("/sql").then(res => res.json()).then(data => this.setState({rows: data}));
    }

    render() {
        return <>
            <TableContainer component={Paper}>
                <Table size={"small"}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={7} style={{backgroundColor: "darkred", color: "white"}}>{"P&L Performance"}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row"></TableCell>
                            <TableCell align="center" colSpan={2}>Current Month</TableCell>
                            <TableCell align="center" colSpan={2}>T3</TableCell>
                            <TableCell align="center" colSpan={2}>T12</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row"></TableCell>
                            <TableCell>Projected</TableCell>
                            <TableCell>Actual</TableCell>
                            <TableCell>Projected</TableCell>
                            <TableCell>Actual</TableCell>
                            <TableCell>Projected</TableCell>
                            <TableCell>Actual</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Net Rental Income</TableCell>
                            <TableCell>$159,839</TableCell>
                            <TableCell>$159,990</TableCell>
                            <TableCell>$469,766</TableCell>
                            <TableCell>$485,067</TableCell>
                            <TableCell>$1,864,438</TableCell>
                            <TableCell>$1,904,208</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Other Income</TableCell>
                            {
                                Array.from('x'.repeat(6)).map((value, index) => <TableCell>{(this.state ? this.state.rows[index].unit : -1)}</TableCell>)
                            }   
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Total Income</TableCell>
                            {
                                Array.from('x'.repeat(6)).map((value, index) => <TableCell>{(this.state ? this.state.rows[index+6].unit : -1)}</TableCell>)
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Operating Expenses</TableCell>
                            {
                                Array.from('x'.repeat(6)).map((value, index) => <TableCell>{(this.state ? this.state.rows[index+12].unit : -1)}</TableCell>)
                            }
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">NOI</TableCell>
                            {
                                Array.from('x'.repeat(6)).map((value, index) => <TableCell>{(this.state ? this.state.rows[index+18].unit : -1)}</TableCell>)
                            }
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    }
}