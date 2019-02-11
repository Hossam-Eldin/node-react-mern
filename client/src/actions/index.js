import axios from 'axios'
import {FETCH_USER} from './types'

/* export const fetchUser  = () =>{
   return function(dispatch) {
    axios.get('/api/current_user')
    .then(res => dispatch({type: FETCH_USER , payload: res}))
   }
} */

export const fetchUser = () => {
 
   return  async (dispatch) =>{
     const request = await axios.get('/api/current_user')
     dispatch({type: FETCH_USER, payload: request.data})
   }
}
