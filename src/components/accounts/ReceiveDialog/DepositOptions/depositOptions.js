import React from 'react';
import { ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';


/**
 * TODO: After Material-UI v 1.0 release switch to ToggleButton
 * (see: https://github.com/callemall/material-ui/pull/7551)
 * 
 * or this approach https://github.com/mui-org/material-ui/pull/10144
 */

class DepositOptions extends React.Component {
  render() {
    const { defaultValue } = this.props;
    return (
      <ToggleButtonGroup name="options" type="radio" defaultValue={ 1 }>
        {/* <ToggleButton value={ 1 }>WEB</ToggleButton> */}
      </ToggleButtonGroup>
    );
  }
}


export default DepositOptions;
