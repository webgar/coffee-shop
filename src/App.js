import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { data } from './data/data'
import AboutCard from './pages/AboutCard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import OurCoffee from './pages/OurCoffee'

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Routes>
					<Route path='/' element={<Home data={data} />} />
					<Route path='coffee' element={<OurCoffee data={data} />} />
					<Route path='coffee/:id' element={<AboutCard data={data} />} />
					<Route path='*' element={<NotFound />} />

					{/* />
						<Footer /> */}
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
