const { combineReducers } = require('redux')
const userReducer = require('./user')
const postReducer = require('./posts')

module.exports = combineReducers({
  user: userReducer,
  posts: postReducer,
})
