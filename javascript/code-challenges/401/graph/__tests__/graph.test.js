"use strict";
const Vertex = require("../module/vertex");
const Edge = require("../module/edge");
const Graph = require("../module/graph");

describe("Graph Implementation", () => {
  it("Add a Vertex", () => {
    let graph = new Graph();

    let A = graph.addVertex("A");

    expect(graph.adjacencyList.has(A)).toEqual(true);
  });

  it("Successfully add an Edge to the graph", () => {
    let graph2 = new Graph();

    let A = graph2.addVertex("A");
    let B = graph2.addVertex("B");
    let C = graph2.addVertex("C");
    let D = graph2.addVertex("D");
    let E = graph2.addVertex("E");
    let F = graph2.addVertex("F");
    let G = graph2.addVertex("G");
    let H = graph2.addVertex("H");

    graph2.addDirectedEdge(A, D);
    graph2.addDirectedEdge(A, C);
    graph2.addDirectedEdge(A, B);

    expect(graph2.adjacencyList.get(A)).toEqual([
      { vertex: { value: "D" }, weight: 0 },
      { vertex: { value: "C" }, weight: 0 },
      { vertex: { value: "B" }, weight: 0 },
    ]);
  });

  it("A collection of all nodes can be properly retrieved from the graph", () => {
    let graph2 = new Graph();

    let A = graph2.addVertex("A");
    let B = graph2.addVertex("B");
    let C = graph2.addVertex("C");
    let D = graph2.addVertex("D");
    let E = graph2.addVertex("E");
    let F = graph2.addVertex("F");
    let G = graph2.addVertex("G");
    let H = graph2.addVertex("H");

    graph2.addDirectedEdge(A, D);
    graph2.addDirectedEdge(A, C);
    graph2.addDirectedEdge(A, B);
    graph2.addDirectedEdge(D, F);
    graph2.addDirectedEdge(B, C);
    graph2.addDirectedEdge(B, E);
    graph2.addDirectedEdge(C, F);
    graph2.addDirectedEdge(C, E);
    graph2.addDirectedEdge(C, B);
    graph2.addDirectedEdge(F, G);
    graph2.addDirectedEdge(G, H);
    graph2.addDirectedEdge(H, F);

    expect(graph2.getNeighbors(A)).toEqual([
      { vertex: { value: "D" }, weight: 0 },
      { vertex: { value: "C" }, weight: 0 },
      { vertex: { value: "B" }, weight: 0 },
    ]);
  });

  it("All appropriate neighbors can be retrieved from the graph", () => {
    let graph2 = new Graph();

    let A = graph2.addVertex("A");
    let B = graph2.addVertex("B");
    let C = graph2.addVertex("C");
    let D = graph2.addVertex("D");
    let E = graph2.addVertex("E");
    let F = graph2.addVertex("F");
    let G = graph2.addVertex("G");
    let H = graph2.addVertex("H");

    graph2.addDirectedEdge(A, D);
    graph2.addDirectedEdge(A, C);
    graph2.addDirectedEdge(A, B);

    expect(graph2.getNeighbors(A)).toEqual([
      { vertex: { value: "D" }, weight: 0 },
      { vertex: { value: "C" }, weight: 0 },
      { vertex: { value: "B" }, weight: 0 },
    ]);
  });

  it("Neighbors are returned with the weight between nodes included", () => {
    let graph2 = new Graph();

    let A = graph2.addVertex("A");
    let B = graph2.addVertex("B");
    let C = graph2.addVertex("C");
    let D = graph2.addVertex("D");
    let E = graph2.addVertex("E");
    let F = graph2.addVertex("F");
    let G = graph2.addVertex("G");
    let H = graph2.addVertex("H");

    graph2.addDirectedEdge(A, D);
    graph2.addDirectedEdge(A, C);
    graph2.addDirectedEdge(A, B);
    graph2.addDirectedEdge(D, F);
    graph2.addDirectedEdge(B, C);
    graph2.addDirectedEdge(B, E);
    graph2.addDirectedEdge(C, F);
    graph2.addDirectedEdge(C, E);
    graph2.addDirectedEdge(C, B);
    graph2.addDirectedEdge(F, G);
    graph2.addDirectedEdge(G, H);
    graph2.addDirectedEdge(H, F);

    let myNeighbor = graph2.getNeighbors(A);
    expect(graph2.getNeighbors(A)).toEqual([
      { vertex: { value: "D" }, weight: 0 },
      { vertex: { value: "C" }, weight: 0 },
      { vertex: { value: "B" }, weight: 0 },
    ]);
    expect(myNeighbor[0].weight).toEqual(0);
  });

  it("testing getNodes to have added the Mapped values to an ordered Set();", () => {
    let graph2 = new Graph();

    let A = graph2.addVertex("A");
    let B = graph2.addVertex("B");
    let C = graph2.addVertex("C");
    let D = graph2.addVertex("D");
    let E = graph2.addVertex("E");
    let F = graph2.addVertex("F");
    let G = graph2.addVertex("G");
    let H = graph2.addVertex("H");

    graph2.addDirectedEdge(A, D);
    graph2.addDirectedEdge(A, C);
    graph2.addDirectedEdge(A, B);
    graph2.addDirectedEdge(D, F);
    graph2.addDirectedEdge(B, C);
    graph2.addDirectedEdge(B, E);
    graph2.addDirectedEdge(C, F);
    graph2.addDirectedEdge(C, E);
    graph2.addDirectedEdge(C, B);
    graph2.addDirectedEdge(F, G);
    graph2.addDirectedEdge(G, H);
    graph2.addDirectedEdge(H, F);

    expect(graph2.nodeSize()).toEqual(8);
  });

  it("A graph with only one node and edge can be properly returned", () => {
    let graph2 = new Graph();

    let A = graph2.addVertex("A");
    let D = graph2.addVertex("D");

    graph2.addDirectedEdge(A, D);

    expect(graph2.adjacencyList.has(A)).toEqual(true);
  });

  it("testing getNodes to have added the Mapped values to an ordered Set();", () => {
    let graph2 = new Graph();

    let A = graph2.addVertex("A");
    let B = graph2.addVertex("B");
    let C = graph2.addVertex("C");
    let D = graph2.addVertex("D");
    let E = graph2.addVertex("E");
    let F = graph2.addVertex("F");
    let G = graph2.addVertex("G");
    let H = graph2.addVertex("H");

    graph2.addDirectedEdge(A, D);
    graph2.addDirectedEdge(A, C);
    graph2.addDirectedEdge(A, B);
    graph2.addDirectedEdge(D, F);
    graph2.addDirectedEdge(B, C);
    graph2.addDirectedEdge(B, E);
    graph2.addDirectedEdge(C, F);
    graph2.addDirectedEdge(C, E);
    graph2.addDirectedEdge(C, B);
    graph2.addDirectedEdge(F, G);
    graph2.addDirectedEdge(G, H);
    graph2.addDirectedEdge(H, F);

    expect(graph2.set.has(A)).toEqual(false);

    graph2.getNodes();

    expect(graph2.set.has(A)).toEqual(true);
  });

  it("An empty graph properly returns null", () => {
    let graph2 = new Graph();

    expect(graph2.nodeSize()).toEqual(null);
  });
});
