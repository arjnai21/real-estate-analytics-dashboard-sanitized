import React, { useState } from 'react';

import {Header, Form, Container, Divider, Button, Checkbox} from 'semantic-ui-react';
import FloatingWidget from "./FloatingWidget";

function FloatingSelectForm(props: any) {
    const { toggle_setting, settings } = props;

    const [is_form_active, set_is_form_active] = useState(false);

    function toggle_form() {
        set_is_form_active(!is_form_active);
    }

    // ref: https://jetsloth.com/gravity-forms/create-a-fixed-widget-contact-form/
    return (
        <React.Fragment>
            <style>{`
                .form-wrap {
                    z-index: 9999999;
                    position: fixed;
                    bottom: 40px;
                    right: 40px;
                }
                .form-panel {
                    width: 373px; /*Panel width*/
                    height: auto; /*Panel height*/
                    max-width: 400px; /*Mac Panel width*/
                    max-height: 800px; /*Max Panel height*/
                    background: #F9FAFA;
                    box-shadow: 5px 5px 20px 0 rgba(0,0,0,0.10);
                    position: absolute;
                    bottom: 40px;
                    right: 0px;
                    transition: all 0.3s ease-in-out;
                    opacity: 0;
                    border-radius: 4px;
                    overflow: hidden;
                    padding:30px;
                    border:1px solid #D9E0E3;
                }
                .panel-active {
                    bottom: 80px;
                    opacity: 100;
                }
                .form.no-label > .gfield_label {
                    display: none;
                }
                .form-panel input[type="submit"] {
                    width:100%
                }
            `}</style>
            <div className="form-wrap">
                <div className={`form-panel ${is_form_active ? 'panel-active' : ''}`}>
                    <Container>
                        <Header size="large">Select your Properties</Header>
                        <Form>
                            <Divider horizontal/>
                            <Form.Field>
                                <Checkbox label='Ventana at Valwood Apartments' checked={settings.ventana} onChange={toggle_setting('ventana')} />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='Villa Gardens Apartment Homes' checked={settings.villa} onChange={toggle_setting('villa')} />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='Cantera' checked={settings.cantera} onChange={toggle_setting('cantera')} />
                            </Form.Field>
                            <Button onClick={() => { toggle_form() }}>Close</Button>
                        </Form>
                    </Container>
                </div>
                <FloatingWidget onClick={() => { toggle_form() }}/>
            </div>
        </React.Fragment>
    )

}

export default FloatingSelectForm;
