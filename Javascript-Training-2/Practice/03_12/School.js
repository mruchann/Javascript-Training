class School {
  constructor(name, country, city) {
    this.name = name;
    this.country = country;
    this.city = city;
  }

  getName() {
    return this.name;
  }

  getCountry() {
    return this.country;
  }
  getCity() {
    return this.city;
  }
}

export default School;
