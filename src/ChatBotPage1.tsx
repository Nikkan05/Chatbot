import React, { useState } from 'react';
import './ChatBotPage.css'; // Add styling for the page

const ChatBotPage: React.FC = () => {
  const [chatHistory, setChatHistory] = useState([
    { from: 'bot', text: 'How can I help you today?' },
    { from: 'user', text: "I'd like to purchase tickets for the museum." },
    { from: 'bot', text: "Great! Let's get you set up with tickets. What date and time would you like to visit?" },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatHistory([...chatHistory, { from: 'user', text: newMessage }]);
      setNewMessage('');
    }
  };
  
  return (
    <div className="chatbot-container">
      <div className="navbar">
        <h1>Museum Chatbot</h1>
        <nav>
          <a href="#">Exhibits</a>
          <a href="#">Hours</a>
          <a href="#">Directions</a>
          <a href="#">Tickets</a>
        </nav>
        <button className="admin-dashboard">Admin Dashboard</button>
      </div>

      <div className="main-content">
        <div className="chat-section">
          <h2>Chat with Muszy</h2>
          <div className="chat-box">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`chat-message ${chat.from}`}>
                <p>{chat.text}</p>
              </div>
            ))}
          </div>
          <div className="chat-input-section">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="chat-input"
            />
            <button onClick={handleSendMessage} className="send-button">
              ➤
            </button>
          </div>
        </div>

        <div className="ticket-section">
          <h2>Purchase Tickets</h2>
          <form className="ticket-form">
            <div className="form-group">
              <label>Date</label>
              <input type="date" defaultValue="2023-06-01" />
            </div>
            <div className="form-group">
              <label>Time</label>
              <select defaultValue="10:00 AM">
                <option>10:00 AM</option>
                <option>12:00 PM</option>
                <option>2:00 PM</option>
                <option>4:00 PM</option>
              </select>
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <select defaultValue="1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <button type="submit" className="purchase-button">
              Purchase Tickets
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 Museum Chatbot. All rights reserved.</p>
        <nav>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </nav>
      </footer>
    </div>
  );
};

export default ChatBotPage;
