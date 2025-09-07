# Ticket Booking dApp

## Project Description

My dApp is a **XXX** built on **Algorand**.
It’s a simple smart contract demo that shows how decentralized apps can handle booking operations on the Algorand blockchain. The goal is to help beginners understand how Algorand smart contracts work with an easy, hands-on example.

## What it does

This dApp allows a user to “book a ticket” by entering their name and destination.
Once booked, the data is stored in the Algorand blockchain’s global state, showcasing how stateful smart contracts can be used in real applications.

## Features

* 📌 Beginner-friendly contract structure written in TypeScript
* 🧑‍🤝‍🧑 Stores passenger name in the global state
* 🗺️ Stores destination in the global state
* 🎟️ Function to “book” a ticket by updating both passenger and destination
* ⚡ Built on Algorand for speed, security, and low fees

## Deployed Smart Contract Link

https://lora.algokit.io/testnet/application/745517167
![WhatsApp Image 2025-09-07 at 23 01 36_8969b182](https://github.com/user-attachments/assets/238cde74-6fba-4b5d-8a87-6e218281f21f)


## Smart Contract Code

```typescript
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
```

---
