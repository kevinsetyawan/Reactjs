import React, { useState } from 'react';
import TampilComp from './TampilComp';

const HooksComp = () => {
    const [jumlah, tambahJumlah] = useState(0)

    //login
    const [dataLogin, setDataLogin] = useState({ username: 'Andika', token: '123abd', isLogin: true })

    //cek kondisi sudah login / elum

    let tampil;

    if (dataLogin.isLogin) {
    tampil = <TampilComp
        username={dataLogin.username}
        fungsi={tambahJumlah.bind(this)}
        jumlah={jumlah} />
    } else {
        tampil =<TampilComp username="Maaf anda belum login" disabled={true}/>
    }

    return (
        <div>
            {tampil}
        </div>
    );
}


export default HooksComp;