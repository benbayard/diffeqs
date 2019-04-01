import React, { useState, useEffect, useRef } from "react";
import { render, Color } from "ink";

import { Pendulum } from "./pendulum";

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

// class Counter extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			i: 0
// 		};
// 	}

// 	render() {
// 		return (

// 	}

// 	componentDidMount() {
// 		this.timer = setInterval(() => {
// 			this.setState({
// 				i: this.state.i + 1
// 			});
// 		}, 100);
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.timer);
// 	}
export function PendulumRenderer() {
  const savedPendulum = useRef<Pendulum>();
  const [stepsTaken, setStepsTaken] = useState<number>(0);

  // Remember the latest callback.
  useEffect(() => {
    savedPendulum.current = new Pendulum(Math.PI, 0, 1);
  }, []);
  useInterval(() => {
    if (
      !savedPendulum.current ||
      stepsTaken >= savedPendulum.current.numSteps
    ) {
      return;
    }
    savedPendulum.current.incrementTime();
  }, 100);

  return savedPendulum.current ? (
    <Color green>
      Angle:{"                "}
      {savedPendulum.current.angle}
      Angle Rate of Change: {savedPendulum.current.angleRateOfChange}
    </Color>
  ) : (
    <Color red>Loading...</Color>
  );
}
