import { Link } from 'react-router-dom'
import './styles.css'
const Public = () => {
    const imageUrl = 'https://media.predictiveindex.com/wp-content/uploads/2016/10/30140800/working_together-1.jpg';
    const content = (
        <section className="public" >
            <header>
                <h1 className='titlexy'>Welcome to Your Work</h1>
            </header>
            <main className="public__main">
                <div className="container">
            <img className="myImage" src={imageUrl} alt="Working Together" 
               
               />            
                </div>
                <br />
            </main>
            <footer>
                <h3 className='titlexy'><a href="/login">Employee Login</a></h3>
            
            </footer>
        </section>

    )
    return content
}
export default Public