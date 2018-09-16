var costClimbingStairs = function(cost) {
  if (cost.length === 0) {
    return 
  } else if (cost.length === 1) {
    return  cost[0]
  } else if (cost.length === 2) {
    return  Math.min(cost[0], cost[1])
  }

  if (cost[0] < cost[1]) {
    return costClimbingStairs(cost.slice(1, cost.length))
  } else {
    return costClimbingStairs(cost.slice(2, cost.length))
  }

}

var minCostClimbingStairs = function(cost) {

};

cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

console.log(costClimbingStairs(cost))

