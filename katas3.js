const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let box1 = document.getElementById('box1')                    
    for(let i = 0; i<25; i++){                           //  KATA 1 
        let numero = document.createElement('h3')        //  DE 1 ATÉ 25 
        box1.appendChild(numero)
        numero.innerHTML = i+1
    }
}
/***************************************************************************************************/
function kata2() {
    let box2 = document.getElementById('box2')                                
    for(let i = 25; i>0; i--){                          //  KATA 2 
        let numero = document.createElement('h3')       // DE 25 ATÉ 1 
        box2.appendChild(numero)
        numero.innerHTML = i
    }
}
/*********************************************************************************************/
function kata3() {
    let box3 = document.getElementById('box3')                                                 
    for(let i = 0; i<25; i++){                                  //  KATA 3        
        let numero = document.createElement('h3')               //  DE -1 ATÉ -25 
        box3.appendChild(numero)
        numero.innerHTML = (i+1)*(-1)
    }
}
/*********************************************************************************************/
function kata4() {
    let box4 = document.getElementById('box4')                                                
    for(let i = 25; i>0; i--){                                  // KATA 4 
        let numero = document.createElement('h3')               //  DE -25 ATÉ -1 
        box4.appendChild(numero)
        numero.innerHTML = (i)*(-1)
    }
}
/*********************************************************************************************/
function kata5() {
    let box5 = document.getElementById('box5')                                               
    for(let i = 25; i>-26; i--){                                
        let numero = document.createElement('h3')                // KATA 5 
        box5.appendChild(numero)                                 // IMPARES DE 25 A -25 
        if(i % 2 == 1 || i %-2 == -1){
            numero.innerHTML = i
        }
    }
}
/*********************************************************************************************/
function kata6() {
    let box6 = document.getElementById('box6')                                               
    for(let i = 1; i<100; i++){                                
        let numero = document.createElement('h3')                // KATA 6 
        box6.appendChild(numero)                                 //  DIVISIVEIS POR 3 ATÉ 100 
        if(i % 3 == 0){
            numero.innerHTML = i
        }
    }
}
/*********************************************************************************************/
function kata7() {
    let box7 = document.getElementById('box7')                                               
    for(let i = 1; i<100; i++){                                
        let numero = document.createElement('h3')                // KATA 7 
        box7.appendChild(numero)                                // DIVISIVEIS POR 7 ATÉ 100 
        if(i % 7 == 0){
            numero.innerHTML = i
        }
    }
}
/*********************************************************************************************/
function kata8() {
    let box8 = document.getElementById('box8')                                               
    for(let i = 100; i>0; i--){                                
        let numero = document.createElement('h3')               //   KATA 8 
        box8.appendChild(numero)                                // DIVISIVEIS POR 3 E 7 ATÉ 100 
        if(i % 3 == 0 || i % 7 == 0){
            numero.innerHTML = i
        }
    }
}
/*********************************************************************************************/
function kata9() {
    let box9 = document.getElementById('box9')                                               
    for(let i = 1; i<100; i++){                                
        let numero = document.createElement('h3')                // KATA 9 
        box9.appendChild(numero)                                 // IMPARES DIVISIVEIS POR 5 ATÉ 100 
        if(i % 5 == 0 && i % 2 == 1){
            numero.innerHTML = i
        }
    }
}
/*********************************************************************************************/
function kata10() {
    let box10 = document.getElementById('box10')                                               
    for(let i = 0; i<sampleArray.length; i++){                                
        let numero = document.createElement('h3')                //  KATA 10 
        box10.appendChild(numero)                                // sampleArray 
        numero.innerHTML = sampleArray[i]                                 
    }
}
/*********************************************************************************************/
function kata11() {
    let box11 = document.getElementById('box11')                                               
    for(let i = 0; i<sampleArray.length; i++){                                
        let numero = document.createElement('h3')                //  KATA 11 
        box11.appendChild(numero)                                // PARES EM sampleArray 
        if(sampleArray[i] % 2 == 0){
            numero.innerHTML = sampleArray[i]
        }                                                            
    }
}
/*********************************************************************************************/
function kata12() {
    let box12 = document.getElementById('box12')                                               
    for(let i = 0; i<sampleArray.length; i++){                                
        let numero = document.createElement('h3')                //  KATA 12 
        box12.appendChild(numero)                                // IMPARES EM sampleArray 
        if(sampleArray[i] % 2 == 1){
            numero.innerHTML = sampleArray[i]
        }                                                            
    }
}
/*********************************************************************************************/
function kata13() {
    let box13 = document.getElementById('box13')                                               
    for(let i = 0; i<sampleArray.length; i++){                                
        let numero = document.createElement('h3')                //  KATA 13 
        box13.appendChild(numero)                                // DIVISIVEIS POR 8 EM sampleArray  
        if(sampleArray[i] % 8 == 0){
            numero.innerHTML = sampleArray[i]
        }                                                            
    }
}
/*********************************************************************************************/
function kata14() {
    let box14 = document.getElementById('box14')                                               
    for(let i = 0; i<sampleArray.length; i++){                                
        let numero = document.createElement('h3')                //  KATA 14 
        box14.appendChild(numero)                                // QUADRADO DO INDICE sampleArray 
        numero.innerHTML = sampleArray[i] * sampleArray[i]                                 
    }
}
/*********************************************************************************************/
function kata15() {
    let soma = 0;
    let box15 = document.getElementById('box15')                    
    for(let i = 1; i<21; i++){                           //  KATA 15 
        let numero = document.createElement('h3')        // SOMA DE 1 A 20 
        box15.appendChild(numero)
        soma = soma + i
        numero.innerHTML = soma
    }
}
/***************************************************************************************************/
function kata16() {
    let soma = 0;
    let box16 = document.getElementById('box16')                    
    for(let i = 0; i<20; i++){                          //  KATA 16 
        let numero = document.createElement('h3')       //  SOMA DE TODOS OS ELEMENTOS EM sampleArray 
        box16.appendChild(numero)
        soma = soma + sampleArray[i]
        numero.innerHTML = soma
    }
}
/***************************************************************************************************/
function kata17() {
    let numero = document.createElement('h3')
    let menor = sampleArray[0];
    let box17 = document.getElementById('box17')                                               
    box17.appendChild(numero)                              //  KATA 17 
    for(let i = 0; i<sampleArray.length; i++){             //  O MENOR NUMERO EM sampleArray                                  
        if(sampleArray[i] < menor){
            menor = sampleArray[i]
        }                                                         
    }
    numero.innerHTML = menor 
}
/***************************************************************************************************/
function kata18() {
    let numero = document.createElement('h3')
    let maior = sampleArray[0];
    let box18 = document.getElementById('box18')                                               
    box18.appendChild(numero)                               //  KATA 18 
    for(let i = 0; i<sampleArray.length; i++){              //  O MAIOR NUMERO EM sampleArray                                     
        if(sampleArray[i] > maior){
            maior = sampleArray[i]
        }                                                         
    }
    numero.innerHTML = maior 
}
/*********************************************************************************************/
function kataBonus1() {
    let box19 = document.getElementById('box19')                    
    for(let i = 1; i<21; i++){                           
        let retangulo = document.createElement('div')            
        box19.appendChild(retangulo)
        retangulo.style.background = 'grey'                  // KATA BONUS 1
        retangulo.style.height = '20px'
        retangulo.style.width = '100px'
        retangulo.style.border = '1px solid white'
    }
}
/*********************************************************************************************/
function kataBonus2() {
    let box20 = document.getElementById('box20')                    
    for(let i = 1; i<21; i++){                           
        let retangulo = document.createElement('div')       // KATA BONUS 2    
        box20.appendChild(retangulo)
        retangulo.style.background = 'grey'
        retangulo.style.height = '20px'
        if(i % 3 == 0){
            retangulo.style.width = '200px'
        }
        else if(i == 1 || i == 4 || i == 7 || i == 10 || i == 13 || i == 16 || i == 19){
            retangulo.style.width = '105px'
        }  
        else{
            retangulo.style.width = '110px'
        }            
        retangulo.style.border = '1px solid white'
    }
}
/*********************************************************************************************/
function kataBonus3() {
    let box21 = document.getElementById('box21')                    
    for(let i = 0; i<20; i++){                           
        let retangulo = document.createElement('div')          
        box21.appendChild(retangulo)
        retangulo.style.background = 'grey'                 // KATA BONUS 3
        retangulo.style.height = '20px'
        retangulo.style.width = sampleArray[i]+'px'
        retangulo.style.border = '1px solid white'
    } 
}
/*********************************************************************************************/
function kataBonus4() {
    let box22 = document.getElementById('box22')                    
    for(let i = 0; i<20; i++){                           
        let retangulo = document.createElement('div')          
        box22.appendChild(retangulo)
        retangulo.style.height = '20px'
        retangulo.style.width = sampleArray[i]+'px'
        retangulo.style.border = '1px solid white'
        if(i % 2 == 0){                                 // KATA BONUS 4
            retangulo.style.background = 'gray'
        }
        else{
            retangulo.style.background = 'red'
        }
    } 
}
/*********************************************************************************************/
function kataBonus5() {
    let box23 = document.getElementById('box23')                    
    for(let i = 0; i<20; i++){                           
        let retangulo = document.createElement('div')          
        box23.appendChild(retangulo)
        retangulo.style.height = '20px'
        retangulo.style.width = sampleArray[i]+'px'             // KATA BONUS 5
        retangulo.style.border = '1px solid white'
        if(sampleArray[i] % 2 == 0){
            retangulo.style.background = 'red'
        }
        else{
            retangulo.style.background = 'gray'
        }
    } 
}
/*********************************************************************************************/

// CHAMANDO FUNÇÕES

kata1()      // DE 1 ATÉ 25
kata2()      // DE 25 ATÉ 1
kata3()      // DE -1 ATÉ -25
kata4()      // DE -25 ATÉ -1
kata5()      // IMPARES DE 25 A -25
kata6()      // DIVISIVEIS POR 3 ATÉ 100
kata7()      // DIVISIVEIS POR 7 ATÉ 100
kata8()      // DIVISIVEIS POR 3 E 7 ATÉ 100 ATÉ 0
kata9()      // IMPARES DIVISIVEIS POR 5 ATÉ 100
kata10()     // sampleArray
kata11()     // PARES EM sampleArray
kata12()     // IMPARES EM sampleArray  
kata13()     // DIVISIVEIS POR 8 EM sampleArray 
kata14()     // QUADRADO DO INDICE sampleArray
kata15()     // SOMANDO DE 1 A 20
kata16()     // SOMANDO TODOS OS ELEMENTOS EM sampleArray
kata17()     // MENOR ELEMENTO EM sampleArray
kata18()     // MAIOR ELEMENTO EM sampleArray


// CHAMANDO FUNÇÕES BÕNUS

kataBonus1()
kataBonus2()
kataBonus3()
kataBonus4()
kataBonus5()  