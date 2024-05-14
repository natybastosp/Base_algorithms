/* 
    Function to perform Depth-First Search (DFS) on a graph
    Parameters:
    - vertices: An array representing the vertices of the graph
    - x: The index of the current vertex being visited
*/
function dfs(vertices, x) {
  // Mark the current vertex as visited
  vertices[x].visitado = 1;

  // Print the index of the current vertex (for visualization purposes)
  console.log(" " + x);

  // Check if the current vertex has adjacent vertices
  if (!vertices[x].lista_adj) {
    // If the current vertex has no adjacent vertices, return
    return;
  }

  // Get the pointer to the start of the adjacency list of the current vertex
  let aux = vertices[x].lista_adj.inicio;

  // Traverse through the adjacency list of the current vertex
  while (aux) {
    // Check if the adjacent vertex has not been visited
    if (vertices[aux.valor].visitado === 0) {
      // If the adjacent vertex has not been visited, recursively call DFS on it
      dfs(vertices, aux.valor);
    }
    // Move to the next node in the adjacency list
    aux = aux.prox;
  }
}
