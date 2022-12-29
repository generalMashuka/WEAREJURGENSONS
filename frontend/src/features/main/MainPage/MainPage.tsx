import ArticleView from "../Articles/ArticleView";
import CategoriesPage from "../../categories/CategoriesPage/CategoriesPage";
import styles from "./styles.module.css";
import videoPic from "./IMG_7272 1 1.svg"; // пока растянутое видео не готово - img заглушка

function MainPage(): JSX.Element {
  return (
    <div>
      <div>
        <div className={styles.videocontainer}>
          <img src={videoPic} alt="video" />
          {/* <video className='video-clip' width="320" height="240" autoPlay loop muted>
      <source src={require('./IMG_5228.webm')} type="video/mp4" />
      Your browser does not support the video tag.
      </video> */}
        </div>
      </div>
      <div className={styles.maincontainer}>
        <CategoriesPage />
        <ArticleView />
      </div>
    </div>
  );
}

export default MainPage;
