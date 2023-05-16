import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Products/Home';
import SingleProductPage from '../Products/SingleProduct';

const Approuter = ()=>{

    return<>
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/products/:id' element={<SingleProductPage />}  />
    </Routes>
    </BrowserRouter>
    </>


}

export default Approuter;