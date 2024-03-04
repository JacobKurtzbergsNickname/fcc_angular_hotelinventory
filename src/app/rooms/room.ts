export interface Room {
    roomNumber: number;
    roomType: string;
    floor: number;
    beds: number;
    accessible: boolean;
    price: number;
    booked: boolean;
}