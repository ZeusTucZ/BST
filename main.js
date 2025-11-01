import { BinarySearchTree } from './BinaryST.js';

// Crear una nueva instancia del árbol binario
const bst = new BinarySearchTree();

console.log("=== INSERTANDO NODOS ===");
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

// Árbol después de insertar todos los nodos:
//         50
//       /    \
//     30      70
//    / \     /  \
//   20 40   60  80

console.log("\n=== Árbol inicial (inOrder) ===");
bst.display(); // 20 30 40 50 60 70 80


// =========================================
// MOSTRAR LOS TRES RECORRIDOS
// =========================================
console.log("\n=== Recorridos del árbol ===");

console.log("InOrder:");
console.log(bst.inOrder().join(" ")); // 20 30 40 50 60 70 80

console.log("\nPreOrder:");
bst.preorder(bst.root);
// 50 30 20 40 70 60 80

console.log("\nPostOrder:");
bst.postOrder();
// 20 40 30 60 80 70 50


// =========================================
// BÚSQUEDA DE CLAVES
// =========================================
console.log("\n=== Búsqueda de claves ===");
console.log("¿Existe 40? →", bst.search(40)); // true
console.log("¿Existe 90? →", bst.search(90)); // false


// =========================================
// ELIMINAR NODOS
// =========================================

// Caso 1: Nodo sin hijos (hoja)
console.log("\n=== Eliminando nodo hoja (20) ===");
bst.remove_node(20);
bst.display(); // 30 40 50 60 70 80

// Caso 2: Nodo con un hijo
console.log("\n=== Eliminando nodo con un hijo (30) ===");
bst.remove_node(30);
bst.display(); // 40 50 60 70 80

// Caso 3: Nodo con dos hijos
console.log("\n=== Eliminando nodo con dos hijos (50) ===");
bst.remove_node(50);
bst.display(); // 40 60 70 80


// =========================================
// RESULTADO FINAL
// =========================================
console.log("\n=== Árbol final (inOrder) ===");
bst.display(); // 40 60 70 80

// Árbol final esperado:
//         60
//       /    \
//     40      70
//               \
//                80
