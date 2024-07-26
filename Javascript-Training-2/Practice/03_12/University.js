import School from "./School.js";

class University extends School {
  constructor(name, country, city, facultySize) {
    super(name, country, city);
    this.facultySize = facultySize;
  }

  getFacultySize() {
    return this.facultySize;
  }
}

export default University;
