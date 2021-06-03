import { IReservation } from "./IReservation";

export interface IreserveRoom{
    type:"ADD_RESERVE_ROOM",
    payload?:IReservation
} 

export interface IGetAllReserveTheRoom{
    type:"GET_ALL_RESERVE_THE_ROOM",
    payload?:IReservation[]
}


export type IAction = IreserveRoom | IGetAllReserveTheRoom;