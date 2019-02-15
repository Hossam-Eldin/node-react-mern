import axios from 'axios'
import {FETCH_USER} from './types'

/* export const fetchUser  = () =>{
   return function(dispatch) {
    axios.get('/api/current_user')
    .then(res => dispatch({type: FETCH_USER , payload: res}))
   }
} */


//handling login and signup
export const fetchUser = () => {
 
   return  async (dispatch) =>{
     const request = await axios.get('/api/current_user')
     dispatch({type: FETCH_USER, payload: request.data})
   }
}


//handeling the stripe
export const handleToken = (token) =>{
   return async (dispatch) =>{
      const res = await axios.post('/api/stripe',token);

      dispatch({type: FETCH_USER, payload: res.data})

   }
}