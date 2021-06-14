import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

interface InvestorReportInputBoxProps {
    header: string;
    rows: number;
}

interface InvestorReportInputBoxState {
    inputString: string;
}

export default class InvestorReportInputBox extends React.Component<InvestorReportInputBoxProps, InvestorReportInputBoxState> {

    constructor(props: InvestorReportInputBoxProps) {
        super(props);
        this.state = {inputString: ''};
    }

    render() {
        return <>
            <TableContainer component={Paper} style={{height: "100%"}}>
                <Table size={"small"}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={{backgroundColor: "darkred", color: "white"}}>{this.props.header}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{height: "100%"}}>    
                        <TableRow style={{height: "100%"}}>
                            <TableCell>
                                <Box displayPrint="none">
                                    <TextField variant="outlined" size={"small"} multiline={true} rowsMax={this.props.rows} style={{width: "100%", height: "100%"}} onChange={(e) => this.setState({inputString: e.target.value})}></TextField>
                                </Box>
                                <Box display="none" displayPrint="block">
                                    <p style={{ whiteSpace: "pre-line" }}>{this.state.inputString}</p>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    }
}