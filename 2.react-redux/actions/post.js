const addPost = (data) =>{
    return {
        type : 'ADD_POST', 
        data, // 새로운 글에 대한 데이터
    }
}

module.exports = {
    addPost,
}