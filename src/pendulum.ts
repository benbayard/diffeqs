export class Pendulum {
  constructor(
    public angle: number,
    public angleRateOfChange: number,
    private pendulumLength: number,
    private airResistance = 0.1,
    private gravity = -9.87,
    public timeStep = 0.01
  ) {}

  private get changeInRate() {
    return (
      -1 * this.airResistance * this.angleRateOfChange -
      (this.gravity / this.pendulumLength) * Math.sin(this.angle)
    );
  }

  public get numSteps() {
    return 1 / this.timeStep;
  }

  public incrementTime() {
    this.angle += this.angle * this.angleRateOfChange;
    this.angleRateOfChange += this.changeInRate * this.angleRateOfChange;
  }
}
