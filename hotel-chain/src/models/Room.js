class Room {
    
    constructor(hotel, number) {
        this.number = number;
        this.hotel = hotel;
        this.currentOccupant = null;
    }

    setOccupant(guest) {
        this.currentOccupant = guest;
    }

    accept(guest) {
        this.setOccupant(guest);
    }
}

export default Room;