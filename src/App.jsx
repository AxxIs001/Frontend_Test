import './App.css'
import Navbar from './component/Navbar'
import ProductGrid from './component/ProductGrid'

function App() {
  return (
    <div className="bg-green-100 min-h-[150vh] flex justify-center pt-6">
      <div className="w-8/12 bg-white rounded-lg max-h-[130vh] ">
        <Navbar />
        <hr/>
        <ProductGrid />
      </div>
    </div>
   
  )
}

export default App
