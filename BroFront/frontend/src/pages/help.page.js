import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const HelpPage = () => {
    const {id} = useParams()

    return (
        <div style={{color:'#000000'}}>
            {id}
        </div>
    );
}

export default HelpPage;
