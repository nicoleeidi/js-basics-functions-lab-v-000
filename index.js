// Code your solution in this file!
require 'pry'
function distanceFromHqInBlocks(location){
  distance= 42 - location
  if (42 > location) {
    return distance
  }
  else {
    return distance * -1
  }

}
function distanceFromHqInFeet(location){
  distanceFromHqInBlocks() * 264
}
function distanceTravelledInFeet(startblock,endblock){
  distance= (endblock- startblock)*264
  if (endblock > startblock ){
    return distance
  }
  else if (startblock > endblock) {
    return distance * -1
  }
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
