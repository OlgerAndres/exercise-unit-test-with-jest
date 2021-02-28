// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
/*test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});*/


test('add 14 + 9 to equal 23', () => {
    let total = sum(14, 9)
    expect(total).toBe(23)
});


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("100 dolares should be 127900 yens", function(){
    
    const { fromDollarToYen } = require('./app.js')

    
    const yens = fromDollarToYen(100)


    const expected = Math.floor(100/1.2) * 127.9; 
    
   
    expect(expected).toBe(yens);
})

test("10000 yen should be 67,37 british pound", function(){
  
    const { fromYenToPound } = require('./app.js')

    const bp = fromYenToPound(10000)

  
    const expected = Math.floor((10000/127.9)) * 0.8; 
    
  
    expect(expected).toBe(bp);
})


