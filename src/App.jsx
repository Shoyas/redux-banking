import React from 'react';
import AccountStatus from './components/AccountStatus/AccountStatus';
import Auth from './components/Auth/Auth';
import Balance from './components/Balance/Balance';
import Banking from './components/Banking/Banking';

const App = () => {
    return (
        <div className="container" style={{marginTop: '20px'}}>
           <Auth/>
           <Balance/>
           <Banking/>
           <AccountStatus/> 
        </div>
    );
};

export default App;