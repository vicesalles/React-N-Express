import axios from 'axios';

//TYPES
import {
    FETCH_USER
} from './types';

export const fetchUser = () =>

    async(dispatch) => {

        const res = await axios.get('/api/me');
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });

    }