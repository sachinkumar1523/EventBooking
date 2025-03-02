import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Event Booking</h1>
      <Link to="/events">View Events</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
