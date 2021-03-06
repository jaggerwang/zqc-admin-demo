/**
 * 在球场
 * zaiqiuchang.com
 */

import {reducer as form} from 'redux-form'

import {combineReducers} from 'redux'
import store from './store'
import error from './error'
import loading from './loading'
import object from './object'
import account from './account'
import post from './post'

export default combineReducers({
  form,
  store,
  error,
  loading,
  object,
  account,
  post
})
