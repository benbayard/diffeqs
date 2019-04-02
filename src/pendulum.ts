export class Pendulum {
  public constructor(
    public angle: number,
    public angleRateOfChange: number,
    private pendulumLength: number = 2,
    private airResistance = 0.1,
    private gravity = 9.87,
    public timeStep = 0.0001
  ) {}

  private get changeInRate(): number {
    return (
      -1 * this.airResistance * this.angleRateOfChange -
      (this.gravity / this.pendulumLength) * Math.sin(this.angle)
    );
  }

  public get numSteps(): number {
    return 1 / this.timeStep;
  }

  public incrementTime(): void {
    this.angle += this.angleRateOfChange * this.timeStep;
    this.angleRateOfChange += this.changeInRate * this.timeStep;
  }
}
