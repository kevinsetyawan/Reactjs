import React, {Component} from 'react'

class Produk extends Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }

    render() {
        return {
            <div className="box-stock">
            <h2>Nama Produk</h2>
            <img src="" alt=""/>
             <p>Harga</p>
            <p>Stok</p>
             <button className="btn-click">Beli</button>
            <p>Status</p>
            </div>
           
        }
    }
}

export default Produk