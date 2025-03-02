import React, { useEffect, useState } from "react";

const Booking = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/events");
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // Handle booking
  const handleBooking = async (eventId) => {
    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId, userId: "12345" }), // Replace with actual user ID
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Booking successful!");
      } else {
        setMessage(data.message || "❌ Booking failed.");
      }
    } catch (error) {
      console.error("Error booking event:", error);
      setMessage("❌ Something went wrong.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Book an Event</h2>

      {message && <p className="text-center p-2 bg-green-200 rounded-md">{message}</p>}

      {loading ? (
        <p>Loading events...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event._id} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p>{event.description}</p>
              <p className="text-gray-600">{new Date(event.date).toDateString()}</p>
              <button
                onClick={() => handleBooking(event._id)}
                className="mt-2 bg-blue-600 text-white p-2 rounded-lg w-full hover:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booking;
