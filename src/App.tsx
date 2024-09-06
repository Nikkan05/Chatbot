import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import EventPage from './EventPage';
import ChatBotPage from './ChatBotPage1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const { user } = useUser();

  
  return (
    
    <header>
      <SignedOut>
        <div>
          <h1>Welcome to Our App!</h1>
          <p>Please sign in to continue:</p>
          <SignInButton>Sign In</SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <div>
          <EventPage></EventPage>
          
          <ChatBotPage></ChatBotPage>
          <UserButton />
        </div>
      </SignedIn>
    </header>
  );
}
