const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

function getGiftsToRefill(a1, a2, a3) {
    let toys = []
    const lastArray = a1.concat(a2, a3)

    const finalArray = [...new Set(lastArray)]
    
    let array = finalArray.filter(regalo => { 
        a1.includes(regalo) + a2.includes(regalo) + a3.includes(regalo) === 1 ? toys.push(regalo) : ''
    })

return toys
}

   
const gifts = getGiftsToRefill(a1, a2, a3) 

