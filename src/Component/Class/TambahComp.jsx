import React, { PureComponent } from 'react';
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:3001'

class TambahComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            kode_barang: '',
            nama_barang: '',
            harga: '',
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    Addmahasiswa = () => {
        axios.post(api+ '/tambah', {
            kode_barang: this.state.kode_barang,
            nama_barang: this.state.nama_barang,
            harga: this.state.harga
        }).then(json =>  {
            if(json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <h4>Form Tambah Data Barang</h4>
                <Alert color="success" style={{dislpay: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                    <Label>Kode Barang</Label>
                    <FormGroup>
                        <Row>
                           <Col>
                                <Input type="text" name="kode_barang" value={this.state.kode_barang} onChange={this.handleChange} placeholder="Masukan Kode Barang"/>
                           </Col> 
                        </Row>
                    </FormGroup>

                    <Label>Nama Barang</Label>
                    <FormGroup>
                        <Row>
                           <Col>
                                <Input type="text" name="nama_barang" value={this.state.nama_barang} onChange={this.handleChange} placeholder="Masukan Nama Barang"/>
                           </Col> 
                        </Row>
                    </FormGroup>

                    <Label>Harga Barang</Label>
                    <FormGroup>
                        <Row>
                           <Col>
                                <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukan Harga Barang"/>
                           </Col> 
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                           <Col>
                                <Button type="button" onClick={this.Addmahasiswa}>Submit</Button>
                           </Col> 
                        </Row>
                    </FormGroup>
                    
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default TambahComp;