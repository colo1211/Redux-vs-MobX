const { createStore, compose, applyMiddleware } = require('redux')
const reducer = require('./reducers/index')
const { logIn, logOut } = require('./actions/user')
const { addPost } = require('./actions/post')

const initialState = {
  user: {
    isLogginIn: true,
    data: null,
  },
  posts: [],
}

// store => next => action
const firstMiddleWare = (store) => (next) => (action) => {
    // dispatch(action) 하기 이전에 실행하고 싶은 코드를 작성한다. 
    console.log('액션 로깅', action.type); 

    // 여기는 next(action) = dispatch(action) 코드와 완전히 동일한 기능
    next(action);  // next는 dispatch 와 동일한 기능을 한다. 
    
    // dispatch(action) 이후 실행 코드
    console.log('액션 로깅 끝'); 
}

const enhancer = applyMiddleware(firstMiddleWare); 

const store = createStore(reducer, initialState, enhancer)

// subscribe 는 react-redux 안에 들어있음, 에러 디버깅 할 때 사용
store.subscribe(() => {
  console.log('changed')
})

// 변경 전
console.log(store.getState())

// 위에는 redux에서 미리 설정 및 정의 하는 코드 (action, reducer)
// -----------------------------------------------------------------------------------
// 아래에는 react 화면에서 사용하는 코드

// dispatch
store.dispatch(
  logIn({
    id: 1,
    name: 'zeroCho',
    admin: true,
  })
)
console.log('로그인', store.getState())

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: '안녕하세요. 리덕스입니다.',
  })
)

console.log('add_post', store.getState())

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: '안녕하세요2. 리덕스입니다2.',
  })
)

console.log('add_post', store.getState())

store.dispatch(logOut())

console.log('로그아웃', store.getState())
