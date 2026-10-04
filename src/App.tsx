import { useEffect, useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");
  const [phaseNumber, setPhaseNumber] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const displayedElapsedTime =
    isRunning && startTime !== null
      ? elapsedTime + (currentTime - startTime.getTime())
      : elapsedTime;

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
      <button
        onClick={() => {
          const now = new Date();
          setIsRunning(true);
          setStartTime(now);
          setCurrentTime(now.getTime());
        }}
        disabled={isRunning}
      >
        Start
      </button>
      <button
        onClick={() => {
          setIsRunning(false);
          setElapsedTime((prevElapsedTime) => {
            if (startTime !== null) {
              const currentTime = new Date();
              const timeDifference =
                currentTime.getTime() - startTime.getTime();
              return prevElapsedTime + timeDifference;
            } else {
              return prevElapsedTime;
            }
          });
        }}
        disabled={!isRunning}
      >
        Stop
      </button>
      <p>Current Task: {taskName}</p>
      <p>Current Phase Number: {phaseNumber}</p>
      <p>{isRunning ? "Running" : "Stopped"}</p>
      <p>Elapsed Time: {Math.floor(displayedElapsedTime / 1000)} seconds</p>
    </>
  );
}

export default App;
