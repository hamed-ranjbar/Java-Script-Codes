const team = {
  _players:[{
    firstName:"James",
    lastName:"Rodriguez",
    age: 21
  },{
    firstName:"Cristiano",
    lastName:"Ronaldo",
    age: 32
  },{
    firstName:"Iker",
    lastName:"Cassilas",
    age: 35
  }],
  _games: [{
    opponent: 'Barcelona',
  	teamPoints: 42,
  	opponentPoints: 27
  },{
    opponent: 'juventus',
  	teamPoints: 45,
  	opponentPoints: 32
  },{
    opponent: 'AC.Milan',
  	teamPoints: 48,
  	opponentPoints: 22
  }],
  get players(){
    const playersKeys = this._players;
    return playersKeys;
  },
  get games(){
    const gamesKeys = this._games;
    return gamesKeys;
  },
  addPlayer(firstName,lastName,age){
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    }
    this._players.push(player);
  },
  addGame(opponent,teamPoints,opponentPoints){
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    }
  },
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa ','Leslie',44);
team.addPlayer('Bugs ','Bunny',76);

console.log(team.players);

team.addGame('Atletico Madrid',51,28);
team.addGame('PSG',52,44);
team.addGame('Manchester City',55,57);

console.log(team.games);
