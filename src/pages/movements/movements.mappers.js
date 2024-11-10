
export const mapMovementsListFromApitoVm = movementsList => {
   return movementsList.map(movement => mapMovementsFromApiToVm(movement))
}


const mapMovementsFromApiToVm = movements => {
    return {
        transaction: new Date(movements.transaction).toLocaleDateString(),
        realTransaction:  new Date(movements.realTransaction).toLocaleDateString(),
        description: movements.description,
        amount: `${movements.amount} €`,
        balance: `${movements.balance} €`,
        accountId: movements.accountId,
        }  
}


