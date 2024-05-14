class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return -1;
    } else {
      return this.items.shift();
    }
  }
}

class Vertex {
  constructor() {
    this.visited = false;
    this.distance = 0;
    this.adjacencyList = [];
  }
}

function bfs(vertices, root) {
  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    if (!vertices[current].visited) {
      console.log(current);
    }
    vertices[current].visited = true;
    for (let i = 0; i < vertices[current].adjacencyList.length; i++) {
      const child = vertices[current].adjacencyList[i];
      if (!vertices[child].visited) {
        vertices[child].distance = vertices[current].distance + 1;
        queue.enqueue(child);
      }
    }
  }
}

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
}

function main() {
  const input = require("readline-sync");
  const [numVertices, numEdges] = input
    .question("Enter the number of vertices and edges separated by ';': ")
    .split(";")
    .map(Number);

  const vertices = new Array(numVertices + 1).fill().map(() => new Vertex());

  for (let i = 0; i < numEdges; i++) {
    const [a, b] = input
      .question("Enter edge (format: a;b): ")
      .split(";")
      .map(Number);
    vertices[a].adjacencyList.push(b);
    vertices[b].adjacencyList.push(a);
  }

  for (let i = 0; i < numVertices; i++) {
    bubbleSort(vertices[i].adjacencyList);
  }

  bfs(vertices, 6);
}

main();
