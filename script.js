document.addEventListener("DOMContentLoaded", function () {
  const calcularBtn = document.getElementById("calcularBtn");
  const resultadoElement = document.getElementById("resultado");

  calcularBtn.addEventListener("click", function () {
      const numeroInput = document.getElementById("numeroInput").value;
      const numero = parseFloat(numeroInput);

      if (!isNaN(numero) && Number.isInteger(numero) && numero >= 0) {
          const factorial = calcularFactorial(numero);
          resultadoElement.textContent = `El factorial de ${numero} es ${factorial}`;
      } else {
          resultadoElement.textContent = "Ingresa un número entero no negativo.";
      }
  });

  function calcularFactorial(n) {
      if (n === 0 || n === 1) {
          return 1;
      } else {
          return n * calcularFactorial(n - 1);
      }
  }
});
