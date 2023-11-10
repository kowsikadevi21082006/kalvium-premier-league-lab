//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function Filterbd(year){
  return players.Filter((player)=>player.debut==year)
}

//Progression 4 - Filter players that play at the position _______
function Filterbp(position){
  return player.Filter((player)=> player.position == position)
}

//Progression 5 - Filter players that have won ______ award
function Filterba(award){
  return player.filter((playeraward) =>{
    return playeraward.award.some((awards)=>awards.name == award)
  })
}

//Progression 6 - Filter players that won ______ award ____ times
function filterbat(award,nooftime){
  return players.filter((playerat)=>{
    let awards = playerat.awards.filter((times)=>times.name==awardname)
    return awards.length === nooftime
  })
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterbac(awardn,country){
  return players.Filter((playerac)=>{
    let awardc = playerac.awards.some((awardc)=>awardc.name == awardname)
    return awardc && playerac.country === country
  })
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterbnoata(noofawards,team,age){
  return players.filter((playeraa)=>{
    var ans = playeraa.awards.length >= noofawards && playeraa.team === team && playeraa.age <= age
    return ans
  })
}

//Progression 9 - Sort players in descending order of their age
function sortByAge(){
  return players.age.sort(x,y) = y.age - x.age
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(){
  return players.awards.sort(x,y) = y.awards - x.awards
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  let average = filterByAwardxTimes(awardName,noOfTimes)
  let output = average.filter(function(item){
    return item.country === country
  })
  return output;
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  let old1 = players.filter(function(item){
    return item.age > age
  })
  old1.sort(function(i){
    return i.name
  })

  let old2 =  players.filter(function(item){
      return item.awards.sort(function(x,y){
        return x.year - y.year
      })
  })
  return old2
}
