import ArticleView from '../../articles/ArticleView';
import AboutUsView from './AboutUs/AboutUsView';
import CategoriesPage from '../../categories/CategoriesPage/CategoriesPage';
import styles from './styles.module.css';
import starButton from './img/star_button.svg';
import news1 from './img/news1.svg';
import news2 from './img/news2.svg';
import news3 from './img/news3.svg';

import videoPic from './img/IMG_7272 1 1.svg'; // пока растянутое видео не готово - img заглушка
import { Link } from 'react-router-dom';

function MainPage(): JSX.Element {
  return (
    <div>
      {/* видео - блок */}
      <div>
        <div className={styles.video_container}>
          <img src={videoPic} alt="video" />
          {/* <video className='video-clip' width="320" height="240" autoPlay loop muted>
        <source src={require('./img/IMG_5228.webm')} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
        </div>
      </div>
      {/* блок - основной страницы */}
      <div className={styles.main_container}>
        <CategoriesPage />

        <div className={styles.links_container}>
          {' '}
          {/* может быть потом вынести блок в отдельную view */}
          <div className={styles.starButton}>
            <a href="/contacts">
              <img className={styles.starImg} src={starButton} alt="" />
              <p className={styles.btn_text}>контакты</p>
            </a>
          </div>
          <div className={styles.starButton}>
            <a href="#">
              <img className={styles.starImg} src={starButton} alt="" />
              <p className={styles.btn_text}>условия доставки</p>
            </a>
          </div>
          <div className={styles.starButton}>
            <a href="/cart">
              <img className={styles.starImg} src={starButton} alt="" />
              <p className={styles.btn_text}>корзина</p>
            </a>
          </div>
        </div>

        <AboutUsView />

        {/* новости */}
        <p className={styles.title}>Новости</p>
        <div className={styles.newsContainer}>
          <div className={styles.leftPart}>
            <a href="">
              <div className={styles.newsCard1}>
                <img src={news1} className={styles.newsImg} alt="news-foto" />
                <div className={styles.name}>
                  <p className={styles.text}>Название статьи</p>
                </div>
              </div>
            </a>
            <a href="">
              <div className={styles.newsCard2}>
                <img src={news2} className={styles.newsImg} alt="news-foto" />
                <div className={styles.name}>
                  <p className={styles.text}>Название статьи</p>
                </div>
              </div>
            </a>
          </div>

          <div className={styles.rightPart}>
            <a href="">
              <div className={styles.newsCard3}>
                <img src={news3} className={styles.newsImg} alt="news-foto" />
                <div className={styles.name}>
                  <p className={styles.text}>Название статьи</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
