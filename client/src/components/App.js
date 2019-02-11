import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'

const Header = () =>  <h2>Header</h2>
const Dash = () =>  <h2>Dash</h2>
const Home = () =>  <h2>Home</h2>

const App = () =>{
    return(
        <div>
               <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/dash" component={Dash} />
                    </div>
               </BrowserRouter> 
        </div>
    )
};


export default App;