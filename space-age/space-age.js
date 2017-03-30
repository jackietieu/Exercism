export default class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.earthYears = this.onEarth();
  }

  onEarth() {
    return +((this.seconds / 31557600)).toFixed(2);
  }

  onMercury() {
    return +(this.earthYears / 0.2408467).toFixed(2);
  }

  onVenus() {
    return +((this.seconds / 31557600) / 0.61519726).toFixed(2);
  }

  onMars() {
    return +(this.earthYears / 1.8808158).toFixed(2);
  }

  onJupiter() {
    return +(this.earthYears / 11.862615).toFixed(2);
  }

  onSaturn() {
    return +(this.earthYears / 29.447498).toFixed(2);
  }

  onUranus() {
    return +(this.earthYears / 84.016846).toFixed(2);
  }

  onNeptune() {
    return +(this.earthYears / 164.79132).toFixed(2);
  }
}
