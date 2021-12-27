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

module.exports = {
    logIn, 
    logOut,
}