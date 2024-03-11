
export default function StarshipCard({shipData}) {
  return (
    <div>
      <h1>{shipData.name}</h1>
      <table>
        <tbody>
        <tr>
          <th>Manufacturer</th>
          <td>{shipData.manufacturer}</td>
        </tr>
        <tr>
          <th>Cargo capacity</th>
          <td>{shipData.cargo_capacity}</td>
        </tr>
        <tr>
          <th>Crew</th>
          <td>{shipData.crew}</td>
        </tr>
        <tr>
          <th>Passengers</th>
          <td>{shipData.passengers}</td>
        </tr>
        <tr>
          <th>Starship class</th>
          <td>{shipData.starship_class}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
