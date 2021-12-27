const { createStore } = require('redux'); 


// 새로운 state 를 만들어 주는 역할
const reducer = (prevState, action) => {
    switch(action.type){
        case 'CHANGE_COMP_A':
            return{
                ...prevState,
                compA : action.data, 
            }
        case 'CHANGE_COMP_B':
            return{
                ...prevState,
                compB : action.data, 
            }
        case 'CHANGE_COMP_C':
            return{
                ...prevState,
                compC : action.data, 
            }
        default : 
            return prevState;  
    }
}; 

const initialState = {
    compA : 'a', 
    compB : 12, 
    compC : null,
};

const store = createStore(reducer, initialState); 

// subscribe 는 react-redux 안에 들어있음, 에러 디버깅 할 때 사용
store.subscribe(()=>{
    console.log('changed'); 
})


// 변경 전
console.log(store.getState()); // { compA: 'a', compB: 12, compC: null }

// action 생성 함수
const changeCompA = (data)=>{
    return {
        type : 'CHANGE_COMP_A',
        data,
    }
}


// dispatch
store.dispatch(changeCompA('b'));

// 변경 후
console.log(store.getState()); // { compA: 'b', compB: 12, compC: null }

