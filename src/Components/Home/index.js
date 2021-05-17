import './styles.css'
import NavBar from '../NavBar'
import Content1 from '../Content1'

import {CounterContextProvider} from '../Counter'
export default function Home(props)
{
    return (
        <CounterContextProvider>
        <div className="main-container">
            <NavBar />
           <div className="bottom">
               <Content1 />
           </div>

        </div>
        </CounterContextProvider>
    )
}