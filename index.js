// Code your solution in this file!
function distanceFromHqInBlocks(location){
  distance= 42 - location
  return distance
}
function distanceFromHqInFeet(location){
  distanceFromHqInBlocks() * 264 
}
function distanceTravelledInFeet(startblock,endblock){
  distance= (endblock- startblock)*264
  return distance
}
function calculatesFarePrice(startblock,endblock){
  distance= endblock- startblock
  if (distance <= 400) {
    return 0
  } 
  else if (distance > 400 && distance <= 2000) {
      return distance * 2 
  }
  else if (distance > 2000 && distance <= 2500){
    return 2 * 2500 
  }
  else if (distance > 2500) {
    return 'cannot travel that far'
  }
    
}