class School {
  constructor(name,level,numberOfStudents){
    const levels = ['Primary','Middle','High'];
    this._name = name;
    this._level = levels.indexOf(level);
    this._numberOfStudents = numberOfStudents;
  }
  get name(){
    return this._name;
  }
  get level(){
    const levels = ['Primary','Middle','High'];
    return levels[this._level];
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(num){
    if (typeof num === 'number')
    	this._numberOfStudents = num;
    else
      console.log('Invalid input: numberOfStudents must be set to a Number.');
  }
  quickFacts(){
    console.log(`${this.name} educates ${ this.numberOfStudents} studentss at the ${this.level} shcool level.`);
  }
  static pickSubstituteTeacher(substituteTeachers){
    const randomNumber = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNumber];
  }
}

class Primary extends School{
  constructor(name,numberOfStudents,pickupPolicy){
    super(name,'Primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School{
  constructor(name,numberOfStudents){
    super(name,'Middle',numberOfStudents);
  }
}

class High extends School{
  constructor(name,numberOfStudents,sportTeams){
    super(name,'High',numberOfStudents);
    this._sportsTeams = sportTeams;
  }
  get sportsTeams() {
    console.log('This school has sport teams listed below:');
    this._sportsTeams.forEach(sport=>{
      console.log(`\t${sport}`);
    });
  }
}

const lorraineHansbury = new Primary('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new High('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams;
