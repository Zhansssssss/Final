import React from 'react';
import styles from '../styles/AboutPage.module.css'; // Импортируем стили
import mapScreenshot from '../assets/map_screenshot.jpg.png';
import creator1 from '../assets/Zhans.jpeg';
import creator2 from '../assets/Dake.jpeg';

function AboutPage() {
    return (
        <div className={styles.container}>
            <div className={styles.aboutUs}>
                <h2 className={styles.aboutUsTitle}>О нас</h2>
                <div className={styles.aboutUsContent}>
                    <p className={styles.aboutUsDescription}>
                        Мы открыли этот магазин с одной простой целью: сделать жизнь любителей техники Apple проще и
                        приятнее. В начале нашего пути мы собрались вместе с идеей не только продавать устройства, но и
                        создать место, где каждый клиент будет чувствовать себя как дома. Мы стремились предложить не
                        просто товары, а исключительный сервис и поддержку, которые сделают ваш опыт использования
                        продукции Apple незабываемым. Именно так родилась наша идея — создать магазин, где каждый клиент
                        будет настоящим гостем, а каждая покупка станет приятным и запоминающимся событием.
                    </p>
                    <div className={styles.creatorsPhotos}>
                        <div className={styles.creatorInfo}>
                            <img src={creator1} alt="Фото создателя 1" className={styles.creatorPhoto}/>
                            <h3 className={styles.creatorName}>Жансерик Олжабаев</h3>
                            <p className={styles.creatorBio}>
                                Первый разработчик сайта
                            </p>
                        </div>
                        <div className={styles.creatorInfo}>
                            <img src={creator2} alt="Фото создателя 2" className={styles.creatorPhoto}/>
                            <h3 className={styles.creatorName}>Жамият Даулет</h3>
                            <p className={styles.creatorBio}>
                                Второй разработчик сайта
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className={styles.subtitle}>Наши контакты</h3>
            <ul className={styles.contactList}>
                <li>Телефон: +7085133003</li>
                <li>Email: Zhanserik@applestore.com</li>
                <li>Instagram: <a href="https://instagram.com/applestore" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}> @applestore</a></li>
            </ul>

            <h3 className={styles.subtitle}>Наше местоположение</h3>
            <div className={styles.mapContainer}>
                <img src={mapScreenshot} alt="Местоположение Apple Store"/>
            </div>
            <p className={styles.address}>Адрес: г.Алматы, улица Жандосова 55</p>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default AboutPage;