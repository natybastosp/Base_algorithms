// Function to perform breadth-first search (BFS) traversal starting from a given root vertex
function bfs(vertices, root) {
  // Create a new queue instance
  const queue = new Queue();
  // Enqueue the root vertex
  queue.enqueue(root);

  // Continue the BFS traversal until the queue is empty
  while (!queue.isEmpty()) {
    // Dequeue the current vertex
    const current = queue.dequeue();
    // If the current vertex has not been visited
    if (!vertices[current].visited) {
      // Output the current vertex (or perform any desired operation)
      console.log(current);
    }
    // Mark the current vertex as visited
    vertices[current].visited = true;
    // Iterate through the adjacency list of the current vertex
    for (let i = 0; i < vertices[current].adjacencyList.length; i++) {
      // Get the child vertex from the adjacency list
      const child = vertices[current].adjacencyList[i];
      // If the child vertex has not been visited
      if (!vertices[child].visited) {
        // Update the distance of the child vertex from the root
        vertices[child].distance = vertices[current].distance + 1;
        // Enqueue the child vertex for further traversal
        queue.enqueue(child);
      }
    }
  }
}
