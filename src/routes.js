import {BrowserRouter as Router, Route} from 'react-router-dom';
import './styles/global.css'

import Sidebar from './components/sidebar';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Home from './pages/home';

const Routes = () => {
    return (
        <>
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/petshop/:id" exact component={Petshop} />
            <Route path="/cadastro" exact component={Checkout} />
            <Route path="/checkout" exact component={Cadastro} />
            <Sidebar />
        </Router>
       
        </>
    );
};

export default Routes;