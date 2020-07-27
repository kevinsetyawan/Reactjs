import React, { Component } from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../../CartContext';

function RowProduct() {

    const { value, setValue } = useContext(CartContext)

    return (
        <Col>
            <Card>
                <CardImg top width="100%" src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-3008974/kenwood_kenwood-ddx419bt-double-din-head-unit_full04.jpg?output-format=webp" alt="Card image cap" />
                <CardBody>
                    <CardTitle> KENWOOD - DDX419BT </CardTitle>
                    <CardSubtitle>Rp. 2.500.000</CardSubtitle>
                    <CardText>
                    ▪ 6.2" WVGA Clear-coated Resistive Display
                    ▪ Built-in Bluetooth
                    ▪ USB and AUX-IN
                    ▪ Spotify Control
                    ▪ Rear Camera Input</CardText>
                    <Button onClick={() => setValue(value + 1)}>Tambahkan Keranjang</Button>
                </CardBody>

                <CardImg top width="100%" src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//100/MTA-2286649/sony_sony-xplod-xs-10sd-slim-kolong-subwoofer-aktif--10-inch-_full05.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle> Sony XPLOD - XS-10SD </CardTitle>
                    <CardSubtitle>Rp. 1.200.000</CardSubtitle>
                    <CardText>
                    ▪ 10" Aktif Subwoofer Kolong
                    ▪ Voice Coil 1.75 (44.4mm) 3.4 Ohm
                    ▪ Impedance 4 Ohm
                    ▪ Frequency Response 57-165Hz, 57-900Hz
                    ▪ Sensitivity 85+-2db/1W at 1M
                    ▪ Rated Power 200W
                    ▪ Max SPL 108+-2db/200W at 1M</CardText>
                    <Button onClick={() => setValue(value + 1)}>Tambahkan Keranjang</Button>
                </CardBody>

                <CardImg top width="100%" src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/12/2/4758228/4758228_f63177f2-7a1b-4855-a2ff-516e181a6332_800_800.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle> JBL - GT5-1204BR </CardTitle>
                    <CardSubtitle>Rp. 3.000.000</CardSubtitle>
                    <CardText>
                    ▪ 12" Bass-Reflex Active Subwoofer Box
                    ▪ Power Handling: 1100W Peak
                    ▪ RMS Power: 275W
                    ▪ Frequency Response: 45 - 150 Hz
                    ▪ Sensitivity: (2.83V @ 1m) 90 dB</CardText>
                    <Button onClick={() => setValue(value + 1)}>Tambahkan Keranjang</Button>
                </CardBody>

                <CardImg top width="100%" src="https://s.blanja.com/picspace/586/270922/800.800_602d62535a4442d9a8a1e081b0baeb96.jpg_800x800.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle> VENOM V - 800.4S SERIES </CardTitle>
                    <CardSubtitle>Rp. 3.200.000</CardSubtitle>
                    <CardText>
                    ▪ Channel : 4 Channels 
                    ▪ 4 Ohm : 4x60w ▪ 2 Ohm : 2x120w 
                    ▪ Crossovers : HP/LP/FULL 
                    ▪ 2 Ohm Mono Bridge : 2x240w 
                    ▪ 4 Ohm Mono Bridge : 2x120w 
                    ▪ 1 Ohm : No 
                    ▪ Remote Level : Yes</CardText>
                    <Button onClick={() => setValue(value + 1)}>Tambahkan Keranjang</Button>
                </CardBody>
            </Card>
        </Col>
    );

}


export default RowProduct;