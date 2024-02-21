// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-page-container">
        <div>
          <h1 className="home-page-heading">Clothes That Get YOU Noticed</h1>
          <p className="home-page-description">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have a always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the sessions new and exciting
            fashion in your own way.
          </p>
          <button type="button" className="shop-now-buttn">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
          alt="clothes that get you noticed"
          className="home-page-image"
        />
      </div>
    </>
  )
}
export default Home
