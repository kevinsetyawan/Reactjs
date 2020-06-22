import React, {Component} from 'react'
import './CSS/Produk.css';

class Produk extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disabled: false
        }
    }

    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock -1
        })

        if(this.state.stock ==1){
            this.setState({
                status: "Habis",
                disabled: true
            })
        }
    }

    render() {
        return (
            <div className="box-stock">
            <h2>{this.props.nama}</h2>
            <img src="https://placeimg.com/640/480/any" alt=""/>
            <p><b>Rp. {this.props.harga}</b></p>
            <p>{this.props.stock}</p>
            <button className="btn-click" onClick={} disabled={this.props.disabled} >Beli</button>
            <p>{this.props.status}</p>
            </div>
           
        )
    }
}

export default Produk