import React from 'react';
import { Button } from 'semantic-ui-react';

function FloatingWidget(props: any) {
    const icon = props.icon || 'clipboard list';
    const color = props.color || 'blue';

    const onClick = props.onClick;

    return (
        <React.Fragment>
            <style>{`
                #selectMenu {
                    width: 60px;
                    height: 60px;
                    border-radius: 100%;
                    box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
                    transition: all 0.1s ease-in-out;
                    transform: scale(1.0);
                    float: right;
                }
                #selectMenu:hover {
                    transform: scale(1.1);
                    cursor: pointer;
                }
            `}</style>
            <div id="selectMenu" style={ props.style || {position: "fixed", bottom: "40px", right: "40px"}}>
                <Button id="button" onClick={onClick} color={color} circular icon={icon} floated='left' size='massive' />
            </div>
        </React.Fragment>
    )

}

export default FloatingWidget;
