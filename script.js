function calcularInteres() {
    var montoInicial = document.getElementById("monto-inicial").value;
    var tasaInteresMensual = 0.0125; // 1.25% mensual
    var meses = 12;
    
    var montoAcumulado = parseFloat(montoInicial);
    var interesAcumulado = 0;
    
    for (var i = 1; i <= meses; i++) {
        montoAcumulado += 250; // Ingreso mensual adicional de 250 Bs
        var interesMensual = montoAcumulado * tasaInteresMensual;
        interesAcumulado += interesMensual;
        montoAcumulado += interesMensual;
    }
    
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "✔️El monto acumulado al final del año es: " + montoAcumulado.toFixed(2) + " Bs. <br> ✔️El interés obtenido al final del año es: " + interesAcumulado.toFixed(2) + " Bs.";
}
