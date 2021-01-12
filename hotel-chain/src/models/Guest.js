class Guest {
    
    constructor(hotel, reservationId, firstName, surname) {
        this.firstName = firstName;
        this.surname = surname;
        this.currentRoom = null;
        this.hotelReservation = hotel;
        this.reservationId = reservationId;
    }

    setRoom(room) {
        this.currentRoom = room;
    }
}

export default Guest;