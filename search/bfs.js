// bfs is useful for finding the shortest path on unweighted graphs

// Adjacency List
const graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

function bfs(graph, start) {
  let visited = new Set();
  let queue = [start];
  const result = [];

  visited.add(start);

  while (queue.length) {
    const vertex = queue.shift(); // remove first element
    result.push(vertex); // and add to result

    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return result;
}

console.log(bfs(graph, "A"));
