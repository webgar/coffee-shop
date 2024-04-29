import { useState } from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import { CardContext } from './components/context/Context'
import { data } from './data/data'
import AboutCard from './pages/AboutCard'
import ForYou from './pages/ForYou'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import OurCoffee from './pages/OurCoffee'

function App() {
	const [selectedCardId, setSelectedCardId] = useState('')
	const handleCardClick = cardId => {
		setSelectedCardId(cardId)
	}

	const match = useMatch('*')
	const isNotFoundPage = match != null

	return (
		<CardContext.Provider
			value={{ selectedCardId, setSelectedCardId, handleCardClick }}
		>
			<div className='app'>
				<Routes>
					<Route path='/coffee-shop' element={<Home data={data} />} />
					<Route
						path='/coffee-shop/coffee'
						element={<OurCoffee data={data} />}
					/>
					<Route path='/coffee-shop/for-you' element={<ForYou data={data} />} />
					<Route path='/coffee-shop/:category/:id' element={<AboutCard data={data} />} />
					<Route path='*' element={<NotFound />} />
				</Routes>

				{!isNotFoundPage && <Footer />}
			</div>
		</CardContext.Provider>
	)
}

export default App
