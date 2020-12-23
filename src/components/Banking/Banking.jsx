import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
    changeAccountType, 
    collectInterest, 
    deleteAccount, 
    deposit, 
    withdraw 
} from '../reducers/bankingAction';


const Banking = () => {

    const [amount, setAmount] = useState("");

    const dispatch = useDispatch();

    const handleForDeposit = () => {
        dispatch(deposit(amount));
    };
    const handleForWithdraw = () => {
        dispatch(withdraw(amount));
    };
    const handleForInterest = () => {
        dispatch(collectInterest(amount));
    };
    const handleForDeleteAccount = () => {
        dispatch(deleteAccount());
    };
    const handleForChangeAccountType = () => {
        dispatch(changeAccountType());
    };
   
    return (
        <div className="form-group">
            <input value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                type="text" className="form-control" name="" id=""/>
            <br/>
            <button 
                onClick={handleForDeposit} 
                type="button" class="btn btn-success" 
                style={{margin: '8px'}}
            >
                Deposit
            </button>

            <button 
                onClick={handleForWithdraw} 
                type="button" class="btn btn-primary" 
                style={{margin: '8px'}}
            >
                Withdraw
            </button>

            <button 
            onClick={handleForInterest} 
            type="button" class="btn btn-warning" 
            style={{margin: '8px'}}
            >
                Collect Interest
            </button>

            <button 
            onClick={handleForDeleteAccount} 
            type="button" class="btn btn-danger" 
            style={{margin: '8px'}}
            >
                Delete Account
            </button>

            <button 
            onClick={handleForChangeAccountType} 
            type="button" class="btn btn-secondary" 
            style={{margin: '8px'}}
            >
                Change Account Type
            </button>

        </div>
    );
};

export default Banking;