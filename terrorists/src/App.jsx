import { useState } from 'react'
import { terrorists } from './component/terroristsData.js'
import './App.css'
import TerroristRow from './component/TerroristRow.jsx'
function App() {
  const [filter,setFilter] = useState("all")
  
  
  function filterData(filterBy)  {
    
    if (filterBy === "all") {
      return terrorists
    }
    if (filterBy === "active") {
      const actives = terrorists.filter(e => e.status === "active")
      return actives
    }
    if (filterBy === "quiet") {
      const quiets = terrorists.filter(e => e.status === "quiet")
      return quiets
    }
    if (filterBy === "dead") {
      const deads = terrorists.filter(e => e.status === "dead")
      return deads
    }
    if (filterBy === "agent") {
      const agents = terrorists.filter(e => e.status === "agent")
      return agents
    }
    if (filterBy === "dangerous") {
      const dangerous = terrorists.filter(e => e.status === "active"  && e.imageUrl !=="https://static.vecteezy.com/system/resources/previews/007/296/447/non_2x/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg" && e.attacksCount === 30)
      return dangerous
    }
  }

  let filterd = filterData(filter)
  
  return (
    <body>
      
      <header>
        <h1>Threat Actor Database</h1>
      </header>
      <span className='buttons'>
        <button onClick={()=> setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Actives</button>
        <button onClick={() => setFilter("quiet")}>Quiets</button>
        <button onClick={() => setFilter("dead")}>Deads</button>
        <button onClick={() => setFilter("agent")}>Israeli Agent</button>
        <button onClick={() => setFilter("dangerous")}>Most Dangerous</button>
      </span>
      <table>
        <tr>
          <th>name</th>
          <th>organization</th>
          <th>attacks count</th>
          <th>status</th>
          <th>relation to israel summary</th>
          <th>image</th>
        </tr>
        {filterd.map((item) => TerroristRow (item))}
      </table>

    </body>

  )
}

export default App
