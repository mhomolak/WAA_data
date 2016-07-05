import React from 'react';

const Years = (props) => (
  <div >
    <h1>Year</h1>
    <table>
      <tbody>
        {props.season.map((x, i) => (
          <tr key={i}>
            <td>
              <img src={x.team_id === 1 ? "/images/Braves.svg" : x.team_id}/>
            </td>
            <td>{x.team_waa}</td>
            <td>{x.payroll}</td>
            <td>{x.wins}</td>
            <td>{x.losses}</td>
            <td>{x.playoffs ? "Yes" : "No"}</td>
            <td>{x.championship ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Years
