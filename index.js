/*Paradoja de Von Savant*/

;
let a=0,b=1,c=2
puertas=[a,b,c]

// Retorna un número aleatorio entre min (incluido) y max (excluido)
let eligeAlAzar  =  (min, max) => Math.floor(Math.random() * (max - min) + min);




let jugar= ()=>{
    ubicacionOculta= eligeAlAzar(0,3)
    eleccion = eligeAlAzar(0,3)
        if(eleccion==ubicacionOculta){
       return true
        } else  return false
    }


var hasta;
let estadistico= (hasta)=>{

    var contador
    hubieraCambiado=[]
    noHubieraCambiado=[]
    for(contador=0; contador<hasta;contador++){
        if(jugar()){
            noHubieraCambiado.unshift(0)
        }
        else {hubieraCambiado.unshift(0)}
    }
    x = `
                Hubiera cambiado de puerta: ${hubieraCambiado.length} veces.
                ( ${(hubieraCambiado.length/(hubieraCambiado.length+noHubieraCambiado.length)* 100)}% de las veces
                deberia aproximarse a 2/3 de las veces)

                No hubiera cambiado de puerta: ${noHubieraCambiado.length} veces.
    
    `
    return console.log(x)
}

estadistico(150000)

 


