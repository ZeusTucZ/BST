import { BinarySearchTree } from './BinaryST.js';

// --- CREACIÓN DEL ÁRBOL ---
const bst = new BinarySearchTree();

// --- INSERCIÓN DE ELEMENTOS ---
console.log("=== INSERCIÓN DE ELEMENTOS ===");
[50, 25, 75, 15, 35, 60, 85, 10, 20, 30, 40].forEach(num => bst.insert(num));

console.log("\nÁrbol inicial (preorder):");
bst.preorder(bst.root);

console.log(`
Estructura aproximada:
        50
       /  \\
     25    75
    / \\    / \\
  15  35  60  85
 / \\  / \\
10 20 30 40
`);

// --- BÚSQUEDA DE CLAVES ---
console.log("=== BÚSQUEDA DE CLAVES ===");
console.log("Buscar 25 (existe):", bst.search(25));   // true
console.log("Buscar 100 (no existe):", bst.search(100)); // false
console.log("Buscar 15 (existe):", bst.search(15));   // true
console.log("Buscar 90 (no existe):", bst.search(90));   // false

// --- ELIMINAR ELEMENTOS ---
console.log("\n=== ELIMINACIONES ===");

// Caso 1: eliminar una hoja (sin hijos)
console.log("\nEliminar hoja (10):");
console.log("Antes:");
bst.preorder(bst.root);
console.log(`
Antes:
        50
       /  \\
     25    75
    / \\    / \\
  15  35  60  85
 / \\  / \\
10 20 30 40
`);
bst.delete_node(10);
console.log("Después:");
bst.preorder(bst.root);
console.log(`
Después:
        50
       /  \\
     25    75
    / \\    / \\
  15  35  60  85
   \\  / \\
   20 30 40
`);

// Caso 2: eliminar nodo con un solo hijo
// Nodo 15 tiene un solo hijo (20) después de eliminar 10
console.log("\nEliminar nodo con un hijo (15):");
console.log("Antes:");
bst.preorder(bst.root);
console.log(`
Antes:
        50
       /  \\
     25    75
    / \\    / \\
  15  35  60  85
   \\  / \\
   20 30 40
`);
bst.delete_node(15);
console.log("Después:");
bst.preorder(bst.root);
console.log(`
Después:
        50
       /  \\
     25    75
    / \\    / \\
  20  35  60  85
      / \\
     30 40
`);

// Caso 3: eliminar nodo con dos hijos
// Nodo 25 tiene dos hijos (20 y 35) después de eliminar 15
console.log("\nEliminar nodo con dos hijos (25):");
console.log("Antes:");
bst.preorder(bst.root);
console.log(`
Antes:
        50
       /  \\
     25    75
    / \\    / \\
  20  35  60  85
      / \\
     30 40
`);
bst.delete_node(25);
console.log("Después:");
bst.preorder(bst.root);
console.log(`
Después:
        50
       /  \\
     30    75
    / \\    / \\
  20  35  60  85
        \\
        40
`);

// --- BÚSQUEDA FINAL PARA COMPROBAR ---
console.log("\n=== BÚSQUEDA FINAL ===");
console.log("Buscar 10 (eliminado):", bst.search(10)); // false
console.log("Buscar 15 (eliminado):", bst.search(15)); // false
console.log("Buscar 25 (eliminado):", bst.search(25)); // false
console.log("Buscar 35 (aún existe):", bst.search(35)); // true

// --- FIN DE PRUEBAS ---
console.log("\n=== PRUEBAS COMPLETADAS ===");
