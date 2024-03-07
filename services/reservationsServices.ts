import { ReservationModel } from "../models/reservationsModel"

export const saveReservation = async( full_name: string, email: string, phone: string, date: Date, hour: string, persons: number, table_id: string) =>{

const document= new ReservationModel({
    "full_name": full_name,
    "email": email,
    "phone": phone,
    "date": date,
    "hour": hour,
    "persons": persons,
    "table_id": table_id
})

await document.save()


}