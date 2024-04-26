import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import { data } from './data/data'
import AboutCard from './pages/AboutCard'
import ForYou from './pages/ForYou'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import OurCoffee from './pages/OurCoffee'

function App() {
	const [selectedCardId, setSelectedCardId] = useState(null)
	const handleCardClick = cardId => {
		setSelectedCardId(cardId)
	}
	return (
		<BrowserRouter>
			<div className='app'>
				<Routes>
					<Route path='/' element={<Home onCardClick={handleCardClick} data={data} />} />
					<Route
						path='/coffee'
						element={<OurCoffee onCardClick={handleCardClick} data={data} />}
					/>
					<Route
						path='/for-you'
						element={<ForYou onCardClick={handleCardClick} data={data} />}
					/>
					<Route path='/:category/:id' element={<AboutCard data={data} />} />

					<Route element={<NotFound />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
