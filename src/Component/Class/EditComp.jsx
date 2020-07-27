import React, { PureComponent } from 'react';
import axios from 'axios'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import qs from 'querystring'

const api = 'http://localhost:3001'

class EditComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_barang: this.props.location.state.id_barang,
            kode_barang: this.props.location.state.kode_barang,
            nama_barang: this.props.location.state.nama_barang,
            harga: this.props.location.state.harga,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    ubahMahasiswa = (idbarang) => {
        const data = qs.stringify({
            id_barang: idbarang,
            kode_barang: this.state.kode_barang,
            nama_barang: this.state.nama_barang,
            harga: this.state.harga
        });

        axios.put(api+ '/ubah', data)
        .then(json => {
            if(json === 200) {
                this.setState({
                    response: json.data.values,
                    dislpay: 'block'
                })
            }else {
                this.setState({
                    response: json.data.values,
                    dislpay: 'block'
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <h4>Form Tambah Data</h4>
                <Alert color="success" style={{ dislpay: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>Kode Barang</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="kode_barang" value={this.state.kode_barang} onChange={this.handleChange} placeholder="Masukan Kode Barang" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Label>Nama Barang</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama_barang" value={this.state.nama_barang} onChange={this.handleChange} placeholder="Masukan Nama Barang" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Label>Harga</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukan Harga Barang" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={()=>this.ubahMahasiswa(this.state.id_barang)}>Update Barang</Button>
                                </Col>
                            </Row>
                        </FormGroup>

                    </Col>
                </Form>
            </Container>
        );
    }
}

export default EditComp;