import { createContext } from 'react';

export const CardContext = createContext({
	selectedCardId: "",
	setSelectedCardId: ()=>{},
	handleCardClick: ()=>{},
})