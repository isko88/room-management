import React from 'react'
import { IAction } from '../../interfaces/IAction'
import { IReservation } from '../../interfaces/IReservation';
import { ADD_RESERVE_ROOM, GET_ALL_RESERVE_THE_ROOM } from '../actions/consts';


export const IReducer = (state :IReservation[], action: IAction) => {
            switch (action.type) {

                case ADD_RESERVE_ROOM.type:
                return{
                    ...state,
                    payload:action.payload
                }
                case GET_ALL_RESERVE_THE_ROOM.type:
                    return{
                        ...state,
                        payload:action.payload
                    }
            
                default:
                    return state;
            }
}
