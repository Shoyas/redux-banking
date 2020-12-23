
// Deposit action
export const deposit = (amount) => {
    return {
        type: "DEPOSIT",
        amount: parseInt(amount)
    }
};

// withdraw action
export const withdraw = (amount) => {
    return {
        type: "WITHDRAW",
        amount: parseInt(amount)
    }
}

// collect interest action
export const collectInterest = (amount) => {
    return {
        type: "COLLECT_INTEREST",
        amount: amount
    }
}

// Delete account action
export const deleteAccount = () => {
    return {
        type: "DELETE_ACCOUNT"
    }
}

// Change account type action
export const changeAccountType = () => {
    return {
        type: "CHANGE_ACCOUNT_TYPE"
    }
}