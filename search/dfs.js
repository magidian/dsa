// Adjacency List
const graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

function dfs(graph, start) {
  const stack = [start];
  const visited = new Set();
  const result = [];

  visited.add(start);

  while (stack.length) {
    const vertex = stack.pop();

    result.push(vertex);

    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }

  return result;
}

console.log(dfs(graph, "A")); // ['A', 'D', 'E', 'F', 'B', 'C']
