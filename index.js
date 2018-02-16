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
