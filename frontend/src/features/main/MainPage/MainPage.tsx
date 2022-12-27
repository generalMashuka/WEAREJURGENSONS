import ItemsPage from "../../items/ItemsPage/ItemsPage";
import ArticleView from "../Articles/ArticleView";
import NavBar from "../Navbar/NavBar";
import styles from './styles.module.css'
import videoPic from './IMG_7272 1 1.svg' // пока растянутое видео не готово - img заглушка

function MainPage():JSX.Element {
  return (
  <div className={styles.maincontiner}>
      <div className={styles.videocontainer}>
        <img src={videoPic} alt="video" />
      {/* <video className='video-clip' width="320" height="240" autoPlay loop muted>
      <source src={require('./IMG_5228.webm')} type="video/mp4" />
      Your browser does not support the video tag.
      </video> */}
      </div>
    <ItemsPage/>
    <ArticleView/>
  </div>
  )
}

export default MainPage;