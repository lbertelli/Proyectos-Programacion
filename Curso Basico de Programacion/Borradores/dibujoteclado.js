var estado = 0;
var colorLinea = "blue";

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x;
var y;
document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", dibujarMouse);


dibujarLinea("red", 300, 1, 1, 1, papel);
dibujarLinea("red", 299, 299, 299, 1, papel);
dibujarLinea("red", 1, 1, 1, 300), papel;
dibujarLinea("red", 1, 299, 299, 299, papel);

function dibujarMouse(evento)
{
    if(estado == 1)
    {
        dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
    }
    x = evento.layerX;
    y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) 
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();    
}


function dibujarTeclado(evento)
{
    var colorcito = "blue";
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.RIGTH:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
        default:
            console.log("otratecla")
            break;               
    }
}