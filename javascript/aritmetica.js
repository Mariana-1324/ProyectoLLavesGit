function sumar() { 
let valor1=document.getElementById("dato1").value;
let valor2=document.getElementById("dato2").value;
let resultadoTotal=document.getElementById("resultado");

let resultadoSuma= parseFloat(valor1) + parseFloat(valor2);

    
resultadoTotal.innerHTML="El resultado es: " +resultadoSuma;

}
function restar() { 
    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    let resultadoTotal=document.getElementById("resultado");
    
    let resultadoResta= parseFloat(valor1) - parseFloat(valor2);
    
        
    resultadoTotal.innerHTML="El resultado es: " +resultadoResta;
    
    }
    function multiplicacion() { 
        let valor1=document.getElementById("dato1").value;
        let valor2=document.getElementById("dato2").value;
        let resultadoTotal=document.getElementById("resultado");
        
        let resultadoMultiplicacion= parseFloat(valor1) * parseFloat(valor2);
        
            
        resultadoTotal.innerHTML="El resultado es: " +resultadoMultiplicacion;
        
        }
        function divicion() { 
            let valor1=document.getElementById("dato1").value;
            let valor2=document.getElementById("dato2").value;
            let resultadoTotal=document.getElementById("resultado");
            
            let resultadoDivicion= parseFloat(valor1) / parseFloat(valor2);
            
                
            resultadoTotal.innerHTML="El resultado es: " +resultadoDivicion;
            
            }