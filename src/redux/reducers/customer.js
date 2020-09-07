const initialState = [
    {
        id : "d15643",
        nameK: "Dương Thành Công",
        phone: "0123456789",
        nameG: "Trần Văn A",
        cost: "150000",
        status: "Đã giao",
        date: "1/5/2020"
    }
];

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CUSTOMER":
            state.push({
                id : "d15664",
                nameK: "Dương Văn Chiến",
                phone: "0932209058",
                nameG: "Trần Văn A",
                cost: "100000",
                status: "Đang vận chuyển",
                date: "14/6/2020"
            })
            return [...state];
        default:
            return state;
    }
}

export default myReducer;