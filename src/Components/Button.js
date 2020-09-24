import React, { Fragment } from 'react';
import { Button } from 'reactstrap';

const Btn = (props) => {

    const style = {
        width: '100%',
        textAlign: 'center',
        fontSize: '0.7em',
        backgroundColor: 'rgb(80,245,228)',
        color: 'black',
        borderRadius: '10px',
        boxShadow: "0px 0px 4px rgb(100,100,100)",
        border: 'none'
    }

    return(
        <Fragment>
            <Button style={style}>{props.time}</Button>
        </Fragment>
    );
}

export default Btn;