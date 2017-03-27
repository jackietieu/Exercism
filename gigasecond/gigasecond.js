class Gigasecond {
  constructor(date) {
    this.startDate = date;
    this.gigasecondInterval = 1e12;
  }

  date() {
    let endDate = new Date(this.startDate.getTime() + this.gigasecondInterval);
    return endDate;
  }
}

export default Gigasecond;
