import React, {useState} from 'react'
import { Jumbotron, Button,  Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function HomePage() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen[!isOpen];
    return (

        <div>
            <Jumbotron>
                <h1 className="display-3">Vins Car Audio </h1>
                <p className="lead">Welcome</p>
                <hr className="my-2" />
                <p>Silahkan Login terlebih dahulu untuk dapat menikmati fasilitas layanan kami.</p>
                <p className="lead">
                    <Button color="primary">Login</Button>
                </p>

            </Jumbotron>

        </div>
    )
}

export default HomePage