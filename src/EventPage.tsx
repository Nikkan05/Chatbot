import React from 'react';
import './App.css'; // Assuming this CSS file contains the styles

const EventPage: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          {/* <img className="pic" src="src/Picture1.png" alt="Muszy" /> */}
          <h1>Museum of Art</h1>
        </div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search exhibits or events..."
        />
      </header>

      <div className="content">
        <section className="events">
          <h2>Upcoming Events</h2>

          <div className="event-card">
            <h3>Special Exhibition: Impressionist Masterpieces</h3>
            <p>
              Explore the captivating world of Impressionist art with this special
              exhibition featuring works by Monet, Renoir, and Degas.
            </p>
            <p>Date: June 1 - August 31</p>
            <p>Time: 10am - 6pm daily</p>
            <button className="buy-tickets">🎟 Buy Tickets</button>
          </div>

          <div className="event-card">
            <h3>Family Day: Hands-On Art Activities</h3>
            <p>
              Bring the whole family and explore your creative side with hands-on
              art activities and workshops.
            </p>
            <p>Date: July 15</p>
            <p>Time: 11am - 4pm</p>
            <button className="buy-tickets">🎟 Buy Tickets</button>
          </div>
        </section>

        <aside className="museum-info">
          <h2>Museum Info</h2>
          <p>📅 Hours: Tuesday - Sunday, 10am - 6pm</p>
          <p>📍 Location: 123 Main Street, Anytown USA</p>
          <p>
            💵 Ticket Prices: <br />
            Adults: $15 <br />
            Students/Seniors: $10 <br />
            Children (Under 12): Free
          </p>
          <p>📞 Contact: (123) 456-7890 | info@museum.com</p>
        </aside>
      </div>

      <footer className="chatbot">
        <div className="chatbox">
          <img className="pic" src="src/Picture1.png" alt="Chatbot Avatar" />
          <p>Museum Chatbot: How can I assist you today?</p>
        </div>
        <input
          type="text"
          className="chat-input"
          placeholder="Type a message..."
        />
        <button className="send-button">➤</button>
      </footer>
    </div>
  );
};

export default EventPage;
