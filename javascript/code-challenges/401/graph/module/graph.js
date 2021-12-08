const Vertex = require("./vertex");
const Edge = require("./edge");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.set = new Set();
  }

  addVertex(value) {
    let payload = new Vertex(value);
    this.adjacencyList.set(payload, []);

    return payload;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (
      !this.adjacencyList.has(startVertex) &&
      !this.adjacencyList.has(endVertex)
    ) {
      throw new Error("Vertex Error");
    }

    let neighbors = this.adjacencyList.get(startVertex);
    let newEdge = new Edge(endVertex, weight);
    neighbors.push(newEdge);
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error("GET NEIGHBOR ERROR :: Invalid vertex");
    }
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes() {
    this.adjacencyList.forEach((key, value) => {
      this.set.add(value);
    });
    return this.set;
  }

  breadthFirst(startVertex) {
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while (queue.length) {
      const current = queue.shift();
      let neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {
        let neighbor = edge.vertex;

        if (!visitedNodes.has(neighbor)) {
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        } else {
          continue;
        }
      }
    }

    return visitedNodes;
  }
  nodeSize() {
    if (!this.adjacencyList.size) {
      return null;
    }

    return this.adjacencyList.size;
  }
}

module.exports = Graph;
