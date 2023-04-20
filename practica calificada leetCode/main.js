const s = ""
const t = "ccachj"

//comparara y eliminar 

var isAnagram = function(s, t) {
    let maxIterations = 5 * Math.pow(10, 4);
    console.log(maxIterations);
    let resultado = true;

    console.log(s);
    console.log(t);

    
    if(1 >= s.length  && t.length <= maxIterations){
    const arrS = [...s.replace(/\s/g, "").replace(/[\ud800-\udfff]/g, "")];
    let arrT = [...t.replace(/\s/g, "").replace(/[\ud800-\udfff]/g, "")];

    let newS = arrS.sort();
    let newT = arrT.sort();

    console.log(arrS);
    console.log(arrT);
    let NumeroDeSalidas = 0;

        if(arrS.length == arrT.length){
            for(let s = 0; s < arrS.length; s++) {
                NumeroDeSalidas++;
                let encontrado = false;
                let t = 0;
                    if(NumeroDeSalidas <= maxIterations && NumeroDeSalidas >= 1){
                        for(let i = 0; i < arrT.length; i++ ){
                           if( arrS[s]== arrT[i]){
                            console.log(arrS[s] + " == " + arrT[i] + "  true");
                            encontrado = true;
                            t = i;
                            break;
                            } else{
                             console.log(arrS[s] + " == " + arrT[i] + "  false");
                            }
                        }
                        if(encontrado == false){
                        resultado = false;
                        break;
                        }else{
                        console.log(arrT)
                        arrT.splice(t, 1);
                        } 
                    } else {
                        resultado = false;
                        break
                    }
            } 
        } else{
        resultado = false;
        }
     
    }else {
    resultado = false;
    }

 return resultado;
}
let anagrama = isAnagram(s, t)


console.log(anagrama)