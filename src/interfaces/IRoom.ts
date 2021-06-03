import { IReservation } from "./IReservation";

export interface IRoom {
    id: IReservation["roomId"];
    reservations: IReservation[];
  }