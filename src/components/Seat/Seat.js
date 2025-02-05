import { useEffect, useState } from "react";
import { SeatItem } from "./styled";

export default function Seat({seat, handleSeat, isSelected}) {
    const [ status, setStatus]= useState("available");
    const {id, isAvailable , name} = seat;

    useEffect(()=>{
        if(isSelected){
            setStatus("selected")
        }else if(isAvailable) {
            setStatus("Available")
        }else{
            setStatus("unavailable")
        }
    }, [isSelected]);

    return (
        <SeatItem onClick={handleSeat} status={status}>{seat.name}</SeatItem>
    )
}