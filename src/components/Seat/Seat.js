import { SeatItem } from "./styled";

export default function Seat({seat}) {
    const {id, isAvailable , name} = seat
    return (
        <SeatItem>{seat.name}</SeatItem>
    )
}