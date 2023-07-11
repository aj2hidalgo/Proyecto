import React, { useState, useEffect } from 'react';
import './button_wallet.css'

function Button_wallet() {
    const [connected, setConnected] = useState(false);
    const [address, setAddress] = useState(null);

    const connectWallet = async () => {
        try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setConnected(true);
        } catch (error) {
        console.error(error);
        }
    };

    const shortenAddress = (address) => {
        if (!address) return '';
        return address.slice(0, 6) + '...' + address.slice(-4);
    };

    useEffect(() => {
        const fetchAddress = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setAddress(accounts[0]);
        };

        if (connected) {
        fetchAddress();
        }
    }, [connected]);

    return (
        <div>
        {connected ? (
            <p className='shorten_address type2'>
                <span>

                </span>
                <span className='p-txt'>...
                    Conectado {shortenAddress(address)}
                </span>
            </p>
        ) : (
            <button className='button type1' onClick={connectWallet}>
                <span className='btn-txt'>
                    Conectar MetaMask
                </span>
            </button>
        )}
        </div>
    );
}
export default Button_wallet;