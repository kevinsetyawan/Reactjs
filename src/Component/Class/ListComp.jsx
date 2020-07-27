import React, { PureComponent } from 'react';
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            tb_barang: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                tb_barang: res.data.values
            })
        })
    }

    Deletemahasiswa = (idbarang) => {
        const { tb_barang } = this.state
        const data = qs.stringify({
            id_barang: idbarang
        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    tb_barang: tb_barang.filter(tb_barang => tb_barang.id_barang !== idbarang),
                    dislpay: 'block'
                })
                //this.props.history.push('/mahasiswa')
            } else {
                this.setState({
                    response: json.data.values,
                    dislpay: 'block'
                })
                //this.props.history.push('/mahasiswa')
            }
        })
    }

    render() {
        return (
            <Container>
                <h2>Data Barang</h2>
                <Alert color="success" style={{ dislpay: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/mahasiswa/tambah"><Button color="success">Tambah Data</Button></NavLink>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Kode Barang</th>
                            <th>Nama Barang</th>
                            <th>Harga Barang</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tb_barang.map(tb_barang =>
                            <tr key={tb_barang.id_barang}>
                                <td>{tb_barang.kode_barang}</td>
                                <td>{tb_barang.nama_barang}</td>
                                <td>{tb_barang.harga}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/mahasiswa/edit',
                                                state: {
                                                    id_barang: tb_barang.id_barang,
                                                    kode_barang: tb_barang.kode_barang,
                                                    nama_barang: tb_barang.nama_barang,
                                                    harga: tb_barang.harga
                                                }
                                            }
                                        }>
                                        <Button>Edit</Button>
                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deletemahasiswa(tb_barang.id_barang)} color="danger">Hapus</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default ListComp;