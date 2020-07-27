import React, { useContext } from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import { CartContext } from '../../CartContext';

function AboutComp () {
    
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">About Us </h1>
                <p className="lead">Pusat Penjualan Audio Mobil Online Terlengkap dan Termurah.</p>
                <hr className="my-2" />
                                
            </Jumbotron>
        
        </div>
    )
}

export default AboutComp