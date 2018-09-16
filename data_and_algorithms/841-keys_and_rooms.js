function canVisitAllRooms(rooms) {
  const visited = {};
  const queue = [0];

  while (queue.length > 0) {
    let key = queue.pop();

    visited[key] = true;

    rooms[key].forEach(k => { 
      if (!visited[k]) queue.push(k)
    });
  }

  return Object.keys(visited).length === rooms.length
}

console.log(canVisitAllRooms([[1],[0],[3],[0]]))