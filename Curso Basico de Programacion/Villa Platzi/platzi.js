var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var posX= 100;
var posY= 100;


var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false,
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var cantidad = aleatorio(1, 20);
        

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);


document.addEventListener("keydown", moverCerdo);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        for(var v=0; v < cantidad; v++)
        {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(pollo.cargaOK)
    {
        for(var v=0; v < cantidad; v++)
        {var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(pollo.imagen, x, y);
        }
                
    }
    if(cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen, posX, posY);
    }    
    
    
}
function moverCerdo(evento)
{
    var movimiento = 15;
    switch (evento.keyCode) {
      case cerdo.UP:
        posY -= movimiento;
          dibujar(posX, posY);    
        
      break;
      case cerdo.DOWN:
        posY += movimiento;
          dibujar(posX, posY);
        
      break;
      case cerdo.LEFT:
        posX -= movimiento;
          dibujar(posX, posY);
        
      break;
      case cerdo.RIGHT:
        posX += movimiento;
          dibujar(posX, posY);
        
      break;
      default:
        console.log("Otra tecla : " + evento.key);
      break;
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}