import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DesignProvider } from "./contexts/design.context";
import { MeetingProvider } from "./contexts/meeting.context";
import { CounterProvider } from "./contexts/counter.context";
import { TimerProvider } from './contexts/timer.context';
import './index.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TimerProvider>
        <DesignProvider>
          <MeetingProvider>
            <CounterProvider>
              <App />
            </CounterProvider>
          </MeetingProvider>
        </DesignProvider>
      </TimerProvider>
    </BrowserRouter>
  </React.StrictMode>
);