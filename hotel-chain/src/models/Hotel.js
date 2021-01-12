class Hotel {

    constructor(name) {
        this.name = name;
        this.potentialGuests = [];
        this.freeRooms = [];
        this.allRooms = [];
    }

    findPotentialGuest(guestId) {
        return this.potentialGuests.find((guest) => guest.id = guestId);
    }

    addPotentialGuest(guest) {
        this.potentialGuests.push(guest);
    }

    addFreeRoom(room) {
        this.freeRooms.push(room);
    }

    addRoom(room) {
        this.allRooms.push(room);
    }

    findRoom(roomId) {
        return this.allRooms.find((room) => room.id = roomId);
    }

    checkIn(reservationId) {
        let guest = this.identifyGuest(reservationId);
        let room = this.findAFreeRoom();
        room.accept(guest);
        return `Guest ${guest.firstName} ${guest.surname} has been checked into room ${room.number}`
    }

    identifyGuest(reservationId) {
        return this.potentialGuests.find((guest) => guest.reservationId === reservationId);
    }

    findAFreeRoom() {
        return this.freeRooms.pop();
    }
}

export default Hotel;