import React, { useState } from 'react';
import './App.css';
import { Typography, Divider, Button, Grid, TextField, Paper } from "@material-ui/core";
import Hotel from "./models/Hotel";
import Guest from "./models/Guest";
import Room from "./models/Room";

const App = () => {
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkInText, setCheckInText] = useState("");
  const [reservationNumber, setReservationNumber] = useState("");
  
  let hotel = new Hotel("The Ritz");
  hotel.addPotentialGuest(new Guest(hotel, "res23", "Bob", "Test"));
  hotel.addPotentialGuest(new Guest(hotel, "res24", "Alice", "Tester"));
  hotel.addPotentialGuest(new Guest(hotel, "res25", "Some", "Guest"));
  hotel.addPotentialGuest(new Guest(hotel, "res26", "A N", "Other"));
  hotel.addPotentialGuest(new Guest(hotel, "res27", "Ima", "Guest"));
  hotel.addRoom(new Room(hotel, "401"));
  hotel.addRoom(new Room(hotel, "402"));
  hotel.addRoom(new Room(hotel, "403"));
  hotel.addRoom(new Room(hotel, "404"));
  hotel.addFreeRoom(new Room(hotel, "401"));
  hotel.addFreeRoom(new Room(hotel, "402"));
  hotel.addFreeRoom(new Room(hotel, "403"));
  hotel.addFreeRoom(new Room(hotel, "404"));

  const checkIn = () => {
    let checkInText = hotel.checkIn(reservationNumber);
    setCheckedIn(true);
    setCheckInText(checkInText);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2">OU TM354 Example</Typography>
        <Paper elevation={1} className='paper-detail' style={{padding: 50}}>
          <Grid container spacing={3}> 
            <Grid item md={12}>  
              <Typography variant="h6">{hotel.name}</Typography>
            </Grid>
            <Grid item md={12}>  
              <TextField
                    required
                    variant="filled"
                    id="reservationNumber"
                    label="Reservation Number"
                    className='form-field'
                    value={reservationNumber}
                    margin="dense" 
                    onChange={(event) => setReservationNumber(event.target.value)}
                />
            </Grid>
            <Grid item md={12}>
              <Button variant="contained" onClick={checkIn} style={(checkedIn) ? { backgroundColor: "green"} : { backgroundColor: "white" }}>
                { (checkedIn) ? checkInText : "Check In" } 
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </header>
    </div>
  );
}

export default App;
