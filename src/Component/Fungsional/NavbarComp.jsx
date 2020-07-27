import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import { CartContext } from '../../CartContext';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const {value, setValue} = useContext(CartContext)

    return (
        <div>
            <p class="bg-primary text-blue"><marquee>Pusat Penjualan Audio Mobil</marquee></p>
            <Navbar color="light" light expand="md">
                <NavbarBrand to="/">Vins Car Audio</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/barang" className="nav-link">Barang</NavLink>
                        </NavItem>
                                             
                        <NavItem>
                            <NavLink to="/produk" className="nav-link">Produk</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/reducer" className="nav-link">Pesan</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/register" className="nav-link">Register</NavLink>
                        </NavItem>
                    </Nav>

                    <NavbarText>
                        <Button color="danger">
                            <i className=" fa fa-shopping-cart"></i>
                            <span className="badge badge-light">{value}</span>
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>

    )
}

export default NavbarComp