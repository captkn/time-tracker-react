import { useState } from 'react'

function App() {
  const [taskName, setTaskName] = useState('')
  const [phaseNumber, setPhaseNumber] = useState('')

  return (
    <>
      <h1>Time Tracker</h1>
      
      <label>
        Task:
        <input
          type="text"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
      </label>
      <label>
        Phase Number:
        <input
          type="text"
          value={phaseNumber}
          onChange={(event) => setPhaseNumber(event.target.value)}
        />
      </label>

      <p>Current Task: {taskName}</p>
      <p>Current Phase Number: {phaseNumber}</p>
    </>
  )
}

export default App