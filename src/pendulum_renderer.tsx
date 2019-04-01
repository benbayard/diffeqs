import React, { useState, useEffect, useRef } from 'react';
import { render, Color } from 'ink';

import { Pendulum } from './pendulum';

function useInterval(callback: () => any, delay: number) {
  const savedCallback = useRef<typeof callback>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function PendulumRenderer() {
  const savedPendulum = useRef<Pendulum>();
  const [stepsTaken, setStepsTaken] = useState<number>(0);

  // Remember the latest callback.
  useEffect(() => {
    savedPendulum.current = new Pendulum(Math.PI / 3, 0, 1);
  }, []);
  useInterval(() => {
    if (!savedPendulum.current) {
      return;
    }
    setStepsTaken(stepsTaken + 1);
    savedPendulum.current.incrementTime();
  }, 1);

  return savedPendulum.current ? (
    <>
      <Color green>
        Angle:{'                '}
        {(savedPendulum.current.angle / Math.PI) * 180}
      </Color>
      <Color green>
        Angle Rate of Change: {savedPendulum.current.angleRateOfChange}
      </Color>
      <Color green>
        Num Steps:{'            '}
        {savedPendulum.current.numSteps}
      </Color>
      <Color green>
        Steps Taken:{'          '}
        {stepsTaken}
      </Color>
    </>
  ) : (
    <Color red>Loading...</Color>
  );
}
