import { Contract, GlobalState } from '@algorandfoundation/algorand-typescript'

export class TicketBooking extends Contract {
  passenger = GlobalState<string>({ key: "passenger", initialValue: "none" })
  destination = GlobalState<string>({ key: "destination", initialValue: "none" })

  book(name: string, place: string): string {
    this.passenger.value = name
    this.destination.value = place
    return "Ticket booked for " + name + " to " + place
  }
}