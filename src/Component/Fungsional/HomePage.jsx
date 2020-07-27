import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function HomePage() {
    
    return (
        
        <div>
            <Jumbotron>

                <h1 className="display-3">Vins Car Audio </h1>
                <p className="lead">Tempat Penjualan Audio Mobil .</p>
                <hr className="my-2" />
                <p>Selamat Berbelanja.</p>
                
            </Jumbotron>
        </div>
    )
}

export default HomePage