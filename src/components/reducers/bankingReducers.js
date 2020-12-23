const initialState = {
    fund: 0,
    isSavingAccount: false,
}

export const bankingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DEPOSIT":
            return {
                ...state,
                fund: state.fund + action.amount
            };
        case "WITHDRAW":
            return {
                ...state,
                fund: state.fund - action.amount
            };
        case "COLLECT_INTEREST":
            return {
                ...state,
                fund: parseFloat(state.fund * 1.30).toFixed(2)
            };
        case "DELETE_ACCOUNT":
            return {
                ...state,
                fund: 0
            };
        case "CHANGE_ACCOUNT_TYPE":
            return {
                ...state,
                isSavingAccount: !state.isSavingAccount
            };
        default:
            return state;
    }

}




