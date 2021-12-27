const { createStore } = require('redux'); 


// 새로운 state 를 만들어 주는 역할
const reducer = (prevState, action) => {
    switch(action.type){
        case 'LOG_IN':
            return{
                ...prevState,
                user : action.data,
            }
        case 'LOG_OUT':
            return{
                ...prevState,
                user : null,  
            }
        case 'ADD_POST':
            return{
                ...prevState,
                posts : [...prevState.posts, action.data]
            }
        default : 
            return prevState;  
    }
}; 

const initialState = {
    user : null, 
    posts : [], 
};

const store = createStore(reducer, initialState); 

// subscribe 는 react-redux 안에 들어있음, 에러 디버깅 할 때 사용
store.subscribe(()=>{
    console.log('changed'); 
})


// 변경 전
console.log(store.getState()); 

// action 생성 함수
const logIn = (data)=>{
    return { // action
        type : 'LOG_IN',
        data, // 사용자 정보에 대한 데이터
    }
}

const logOut = () => {
    return { // action
        type : 'LOG_OUT'
    }
}

const addPost = (data) =>{
    return {
        type : 'ADD_POST', 
        data, // 새로운 글에 대한 데이터
    }
}


// 위에는 redux에서 미리 설정 및 정의 하는 코드 (action, reducer)
// -----------------------------------------------------------------------------------
// 아래에는 react 화면에서 사용하는 코드

// dispatch
store.dispatch(logIn({
    id : 1,
    name : 'zeroCho', 
    admin : true, 
}));
console.log('로그인',store.getState()); 

store.dispatch(addPost({
    userId : 1, 
    id : 1, 
    content : '안녕하세요. 리덕스입니다.'
}))

console.log('add_post', store.getState()); 

store.dispatch(addPost({
    userId : 1, 
    id : 2, 
    content : '안녕하세요2. 리덕스입니다2.'
}))

console.log('add_post', store.getState()); 

store.dispatch(logOut()); 

console.log('로그아웃',store.getState()); 

