// Code your solution in this file!

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
  distanceFromHqInBlocks(location) * 264

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
  if (endblock > startblock){
    distance= (endblock- startblock)*264
  }
  else if (startblock > endblock){
    distance= (endblock- startblock)* -264
  }

  if (distance <= 400) {
    return 0
  }
  else if (distance > 400 && distance <= 2000) {
      return distance * .02
  }
  else if (distance > 2000 && distance <= 2500){
    return .02 * 2000
  }
  else if (distance > 2500) {
    return 'cannot travel that far'
  }

}
