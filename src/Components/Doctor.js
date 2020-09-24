import React from 'react';
import { Container, Button } from 'reactstrap';
import Path3 from '../images/Path3.png';

const Doctor = () => {

    const style = {
        paddingTop: '50px',
        paddingBottom: '50px',
        backgroundImage: `url(${Path3})`,
        backgroundSize: 'contain',
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div style={style} >
            <Container>
                <h1>Are You a Doctor ?</h1>
                <h4>Get on Board with us!</h4><br />
                <ul style={{ marginBottom: '10px', fontSize: '1.3rem' }}>
                    <li>Increase your reach</li>
                    <li>Organise your system</li>
                    <li>Strengthen your Online Reputation</li>
                </ul>
                <Button color="primary" style={{ marginLeft:'50px', marginBottom:'100px', marginTop:'16px' }}>Join Now</Button>
            </Container>
        </div>
    );
}

export default Doctor;