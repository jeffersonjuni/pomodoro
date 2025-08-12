import React, { JSX } from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={1800} // 30min
        shortRestTime={600} // 10min - For each pomodoro one shortRestTime
        longRestTime={900} // 15min
        cycles={4} // For each end of cycle one longRestTime
      />
    </div>
  );
}

export default App;
