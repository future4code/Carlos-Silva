// EXERCÍCIO 1 - LETRA A

export interface User {
	name: string
	balance: number
}

// EXERCÍCIO 1 - LETRA B

export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}