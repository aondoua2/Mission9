// import { useState } from 'react';
// import { Bowler } from '../types/Bowler';
// import { Team } from '../types/Team';

// function BowlerList() {
//   const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

//   const fetchBowlerData = async () => {
//     const rsp = await fetch('https://localhost:7197/api/BowlerControllers');
//     //('https://localhost:44308/api/BowlerControllers'); //-- https://localhost:7197;http://localhost:5270
//     const f = await rsp.json();
//     setBowlerData(f);
//   };

//   fetchBowlerData(); // calling the fucntion
//   return (
//     <>
//       <div className="row">
//         <h4 className="text-center">Best Bowling Teams</h4>
//       </div>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Bowler Last Name</th>
//             <th>Bowler First Name</th>
//             <th>Bowler Middle Name Initial</th>
//             <th>Bowler Address</th>
//             <th>Address</th>
//             <th>City</th>
//             <th>State</th>
//             <th>Zip</th>
//             <th>Phone Number</th>
//             <th>Team ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bowlerData.map((b) => (
//             <tr key={b.bowlerId}>
//               <td>{b.bowlerLastName}</td>
//               <td>{b.bowlerFirstName}</td>
//               <td>{b.bowlerMiddleInit}</td>
//               <td>{b.bowlerAddress}</td>
//               <td>{b.bowlerCity}</td>
//               <td>{b.bowlerState}</td>
//               <td>{b.bowlerZip}</td>
//               <td>{b.bowlerPhoneNumber}</td>
//               <td>{b.teamID}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default BowlerList;

import { useState, useEffect } from 'react';
import { Bowler } from '../types/Bowler';
import { Team } from '../types/Team';

function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);
  const [teamData, setTeamData] = useState<Team[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      try {
        const rsp = await fetch('https://localhost:7197/api/BowlerControllers');
        if (!rsp.ok) {
          throw new Error('Failed to fetch bowler data');
        }
        const f = await rsp.json();
        setBowlerData(f);
      } catch (error) {
        console.error('Error fetching bowler data:', error);
      }
    };

    const fetchTeamData = async () => {
      try {
        const rsp = await fetch('https://localhost:7197/api/TeamControllers');
        if (!rsp.ok) {
          throw new Error('Failed to fetch team data');
        }
        const f = await rsp.json();
        setTeamData(f);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchBowlerData();
    fetchTeamData();
  }, []);

  function getTeamNameById(teamID: number): string {
    const team = teamData.find((t) => t.teamID === teamID);
    return team ? team.teamName : 'Unknown Team';
  }

  return (
    <>
      <div className="row">
        <h4 className="text-center">Best Bowling Teams</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Middle Name Initial</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
            <th>Team ID</th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.bowlerId}>
              <td>{b.bowlerLastName}</td>
              <td>{b.bowlerFirstName}</td>
              <td>{b.bowlerMiddleInit}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
              <>
                <td className="hidden">{b.teamID}</td>
                <td className="hidden">
                  {b.teamID === 2 ? 'Sharks' : 'Marlins'}
                </td>
              </>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
