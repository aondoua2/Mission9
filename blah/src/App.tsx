import React, { useState, useEffect } from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

// #1: A heading section at the top introducing the user to what the site is.
const HeadingSection = () => {
  return (
    <div className="app">
      <header>
        <h1>Welcome!</h1>
      </header>
    </div>
  );
};

// #2: A team “card” that contains the following information about each school
interface TeamData {
  school: string;
  name: string;
  city: string;
  state: string;
}

const TeamCard: React.FC<TeamData> = ({ school, name, city, state }) => {
  return (
    <div className="team-card">
      <h3>{school}</h3>
      <p>Mascot: {name}</p>
      <p>Location: {city}, {state}</p>
    </div>
  );
};

// #3: A list of team cards that shows all the teams on the list
const All: React.FC = () => {
  const [teams, setTeams] = useState<TeamData[]>([]);

  useEffect(() => {
    setTeams(teamsData.teams); 
  }, []);

  return (
    <div className="all">
      <header>
        <h1>College Basketball Teams 🏀 </h1>
      </header>
      <div className="team-list">
        {teams.map((team, index) => (
          <TeamCard key={index} {...team} />
        ))}
      </div>
    </div>
  );
};

// in addition to the App function:
function App() {
  return (
    <div className="App">
      <HeadingSection />
      <All />
    </div>
  );
}

export default App;
