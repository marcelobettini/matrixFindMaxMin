import "./styles.css";

const cells = document.getElementsByTagName("td");
//cells[0]... cells[11]

//crea un array multidimensional de 3 filas por 4 columnas
const matrix: number[][] = new Array(3);
matrix[0] = new Array(4);
matrix[1] = new Array(4);
matrix[2] = new Array(4);

//función para quitar la clase max
function resetMaxMin(): void {
  for (let i: number = 0; i < cells.length; i++) {
    if (cells[i].classList.contains("max")) cells[i].classList.remove("max");
    if (cells[i].classList.contains("min")) cells[i].classList.remove("min");
  }
}

//función para hallar el máximo y marcar la celda
//yes, I know it's quadratic, but's easy to understand for my students
function findMaxMin(): void {
  let cellIndex: number = 0;
  let cellMax: number = 0;
  let cellMin: number = 100;
  let maxNum: number = 0;
  let minNum: number = 100;
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxNum) {
        maxNum = matrix[i][j];
        cellMax = cellIndex;
      }
      if (matrix[i][j] < minNum) {
        minNum = matrix[i][j];
        cellMin = cellIndex;
      }
      cellIndex++;
    }
  }
  cells[cellMax].classList.add("max");
  cells[cellMin].classList.add("min");
}

//función para llenar el matrix
function fillmatrix(): void {
  resetMaxMin();

  let cellIndex: number = 0;
  /* itera el matrix pidiendo valores, según el siguiente patrón:
  matrix[fil0][col0], matrix[fil0][col1], matrix[fil0][col2]... etc. */
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
      matrix[i][j] = Math.round(Math.random() * 101);
      cells[cellIndex].innerText = matrix[i][j].toString();
      cellIndex++;
    }
  }
}

//referencio el botón y agrego listener de evento
const btnFill = document.getElementById("btnFill") as HTMLButtonElement;
btnFill?.addEventListener("click", fillmatrix);
const btnFind = document.getElementById("btnFind") as HTMLButtonElement;
btnFind?.addEventListener("click", findMaxMin);
