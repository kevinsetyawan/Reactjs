import React, {useState, createContext, useReducer} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Fungsional/HooksComp';
import HooksUseEffects from './Component/Hooks/Fungsional/HooksUseEffects';
import { CartContext } from './CartContext';
import ProductComp from './Component/Hooks/Fungsional/ProductComp';
import HooksReducer from './Component/Hooks/Fungsional/HooksReducer';
import Tagihan from './Component/Hooks/Fungsional/Tagihan';
import RegisterComp from './Component/RegisterComp';
import LoginComp from './Component/LoginComp';


// import BootstrapComp from './Component/Class/BootstrapComp';
//import Parent from './Component/Class/Parent';
// import logo from './logo.svg';
// import './App.css';
// import Home from './Component/Fungsional/Home';
// import Beranda from './Component/Class/Beranda';


//Context
export const AuthContext = createContext()

//Inisiasi state
const initialState = {
  jumlah: 1,
  hargasatuan: 2500000,
  hargatotal: 2500000,
  isAuthenticated: false,
  user: null,
  token: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }

    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
      case 'tambah': return {
        ...state,
        jumlah: state.jumlah + 1,
        hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
    }
    case 'kurang': return {
        ...state,
        jumlah: state.jumlah - 1,
        hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
    }
    
    default:
      return state

  }
}

export const keranjangContext = createContext()

const App = () => {

  const [value, setValue] = useState(0)

  const[count, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <CartContext.Provider value={{value, setValue}}>
        <NavbarComp />
        <keranjangContext.Provider value={{keranjangState: count, keranjangDispatch:dispatch}}>
        <switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/barang" component={ListComp} />
          <Route exact path="/mahasiswa/tambah" component={TambahComp} />
          <Route exact path="/mahasiswa/edit" component={EditComp} />
          <Route exact path="/kelas" component={KelasComp} />
          <Route exact path="/hooks" component={HooksComp} />
          <Route exact path="/useeffects" component={HooksUseEffects} />
          <Route exact path="/produk" component={ProductComp} />
          <Route exact path="/reducer" component={HooksReducer} />
          <Route exact path="/tagihan" component={Tagihan} />
          <Route exact path="/register" component={RegisterComp} />
          <Route exact path="/login" component={LoginComp} />

          {/*<Route exact path="/detail/:id" component={DetailComp} />*/}
        </switch>
        </keranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;