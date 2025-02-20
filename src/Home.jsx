import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  const startQuiz = () => {
    localStorage.clear()
  }
  return (
    <>
      <section className='starting-section'>
        <div className='inner'>
          <h1 className='noto-serif-display-tag' style={{color: "#ffffff"}}>Build a self care routine suitable for you</h1>
          <p className='your-needs'>Take out test to get a personalised self care routine based on your needs.</p>
          <Link to='/question1'>
            <button onClick={startQuiz}>Start the quiz</button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home