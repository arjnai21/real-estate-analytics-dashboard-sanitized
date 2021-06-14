import React, { useState } from 'react';
import {Grid, Button} from "@material-ui/core";

function DashboardSection(props: any) {
    const [visible, setIsVisible] = useState(true);

    const toggle_visibility = () => setIsVisible(!visible);

    return (
        <>
            <Grid item xs={12}>
                <h1>{ props.title }</h1>
                <div>
                    <p>{ props.description }</p>
                    <Button variant="contained" color="primary" onClick={toggle_visibility}>{ visible ? "Hide" : "Show" }</Button>
                </div>
            </Grid>
            { visible && props.children }
        </>
    );
}

export default DashboardSection;
