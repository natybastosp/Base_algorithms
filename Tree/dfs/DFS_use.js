let qtd_global = new Array(10001).fill(0);

class Vertice {
  constructor() {
    this.visitado = 0;
    this.lista_adj = null;
  }
}

class Registro {
  constructor(valor) {
    this.valor = valor;
    this.prox = null;
  }
}

class Lista {
  constructor() {
    this.qtd = 0;
    this.inicio = null;
  }
}

function incluir_ordenado_lista(l, x) {
  let novo = new Registro(x);

  if (!l.inicio) {
    l.inicio = novo;
  } else {
    let aux = null;
    let ant = null;
    let inserido = false;
    aux = l.inicio;
    while (aux && !inserido) {
      if (aux.valor === novo.valor) {
        return 0;
      }

      if (aux.valor < novo.valor) {
        ant = aux;
        aux = aux.prox;
      } else {
        if (!ant) {
          l.inicio = novo;
        } else {
          ant.prox = novo;
        }
        novo.prox = aux;
        inserido = true;
      }
    }
    if (!inserido) {
      ant.prox = novo;
      inserido = true;
    }
  }
  l.qtd++;
  return 1;
}

function mostrar_lista(l) {
  let aux = l.inicio;

  if (!aux) {
    console.log("Lista vazia");
    return;
  }

  while (aux) {
    console.log(" -> " + aux.valor);
    aux = aux.prox;
  }
}

function dfs(vertices, x) {
  vertices[x].visitado = 1;
  console.log(" " + x);

  if (!vertices[x].lista_adj) {
    return;
  }

  let aux = vertices[x].lista_adj.inicio;
  while (aux) {
    if (vertices[aux.valor].visitado === 0) {
      dfs(vertices, aux.valor);
    }
    aux = aux.prox;
  }
}

function carrega_grafo(vertices, arestas) {
  let qtd_vertices = 0;

  for (let i = 0; i < 10001; i++) {
    qtd_global[i] = 0;
  }

  for (let i = 0; i < arestas.length; i++) {
    let a = arestas[i][0];
    let b = arestas[i][1];

    console.log(" A: " + a + " B: " + b);

    if (qtd_global[a] === 0) {
      qtd_vertices++;
      qtd_global[a] = 1;
    }

    if (qtd_global[b] === 0) {
      qtd_vertices++;
      qtd_global[b] = 1;
    }

    push(vertices[a], b);
    push(vertices[b], a);
  }

  return qtd_vertices;
}

function push(v, x) {
  if (!v.lista_adj) {
    v.lista_adj = new Lista();
  }
  incluir_ordenado_lista(v.lista_adj, x);
}

function mostrar_lista_dos_vertices(v) {
  for (let i = 0; i < v.length; i++) {
    if (v[i].lista_adj) {
      console.log("Lista de Adjacências do nó: " + i);
      mostrar_lista(v[i].lista_adj);
    }
  }
}

function main(arestas) {
  let vertices = new Array(10000).fill(null).map(() => new Vertice());
  let qtd_vertices = carrega_grafo(vertices, arestas);

  if (qtd_vertices) {
    console.log(
      "\nGrafo carregado com sucesso. Quantidade de vértices: " + qtd_vertices
    );
    mostrar_lista_dos_vertices(vertices);
  } else {
    console.log("\nProblema no carregamento do grafo");
  }

  console.log("\nChamando DFS:");
  dfs(vertices, 1);
}

// Example usage:
let arestas = [
  [1, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [3, 4],
  [4, 5],
];
main(arestas);
