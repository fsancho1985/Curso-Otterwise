export function isCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '')
    if(cnpj === '') {
        return false
    } else if (cnpj.length !== 14) {
        return false
    }

    // Cálculo do primeiro dígito verificador
    let noDV = cnpj.substring(0, cnpj.length - 2)
    const multiplicadores = [5,4,3,2,9,8,7,6,5,4,3,2]
    let newNoDV = multiplicadores.reduce((acc, elem, i) => {
        return (noDV[i] * elem) + acc  
    }, 0)

    let firstDV = newNoDV % 11
    firstDV < 2 ? firstDV = 0 : firstDV = 11 - firstDV
    console.log(firstDV)
    // if(firstDV < 2) {
    //     firstDV = 0
    // } else {
    //     firstDV = 11 - firstDV
    // }
    noDV = noDV + firstDV

    // Cálculo do segundo dígito verificador
    const multiplicadores2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    let newNoDV2 = multiplicadores2.reduce((acc, elem, i) => {
        return (noDV[i] * elem) + acc  
    }, 0)
    
    let secondDV = newNoDV2 % 11
    secondDV < 2 ? secondDV = 0 : secondDV = 11 - secondDV
    console.log(secondDV)
    // if(secondDV < 2) {
    //     secondDV = 0
    // } else {
    //     secondDV = 11 - secondDV
    // }
    
    noDV = noDV + secondDV

    noDV === cnpj ? true : false

    // if(noDV === cnpj) {
    //     return true
    // } else {
    //     return false
    // }


//     let soma = 0
//    soma += noDV[0] * 5
//    soma += noDV[1] * 4
//    soma += noDV[2] * 3
//    soma += noDV[3] * 2
//    soma += noDV[4] * 9
//    soma += noDV[5] * 8
//    soma += noDV[6] * 7
//    soma += noDV[7] * 6
//    soma += noDV[8] * 5
//    soma += noDV[9] * 4
//    soma += noDV[10] * 3
//    soma += noDV[11] * 2
// //    console.log(soma)
//    let firstDV = soma % 11
// //    console.log(firstDV)
//    if (firstDV < 2) {
//        firstDV = 0
//    } else {
//        firstDV = 11 - firstDV
//    }
//    noDV = noDV + firstDV
//    let soma2 = 0
//    soma2 += noDV[0] * 6
//    soma2 += noDV[1] * 5
//    soma2 += noDV[2] * 4
//    soma2 += noDV[3] * 3
//    soma2 += noDV[4] * 2
//    soma2 += noDV[5] * 9
//    soma2 += noDV[6] * 8
//    soma2 += noDV[7] * 7
//    soma2 += noDV[8] * 6
//    soma2 += noDV[9] * 5
//    soma2 += noDV[10] * 4
//    soma2 += noDV[11] * 3
//    soma2 += noDV[12] * 2
//    let secondDV = soma2 % 11
//    if(secondDV < 2) {
//     secondDV = 0
//    } else {
//        secondDV = 11 - secondDV
//    }
//    noDV = noDV + secondDV
// //    console.log(noDV)
   
}