import ItemsPage from "../../items/ItemsPage/ItemsPage";
import ArticleView from "../Articles/ArticleView";
import NavBar from "../Navbar/NavBar";

function MainPage():JSX.Element {
  return (
  <div>
      <div>
      <video className='video-clip' width="320" height="240" autoPlay loop muted>
      <source src={require('./IMG_5228.webm')} type="video/mp4" />
      Your browser does not support the video tag.
      </video>
      </div>
    <ItemsPage/>
    <ArticleView/>
  </div>
  )
}

export default MainPage;