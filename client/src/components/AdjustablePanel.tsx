import React from 'react';
import { GrafanaEmbeds } from './GrafanaEmbeds';

interface AdjustablePanelProps {
    ventana: boolean,
    villa: boolean,
    cantera: boolean,
    name: string
}

interface AdjustablePanelState {

}

export default class AdjustablePanel extends React.Component<AdjustablePanelProps, AdjustablePanelState> {

    constructor(props: AdjustablePanelProps) {
        super(props);
    }

    render() {
        // convert bitset to integer
        const id = (this.props.ventana ? 4 : 0) + (this.props.villa ? 2 : 0) + (this.props.cantera ? 1 : 0);
        return GrafanaEmbeds[this.props.name][id];
    }
}
