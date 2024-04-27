import React, { memo } from 'react';
import AboutPic from '../AboutPic/AboutPic';
import AboutTitle from '../AboutTitle/AboutTitle';
import Wrapper from '../Wrapper/Wrapper';
import styles from './AboutCard.module.css';

const AboutCard = memo(({ data, cardId }) => {
  const selectedItem = data.find(card => card.id === cardId);

  if (!selectedItem) {
    return <p>Карта не найдена!</p>; // Или отобразите фиктивный контент
  }

  return (
    <>
      <Wrapper aboutClasses={styles.aboutItWrapper}>
        <AboutPic src={selectedItem.src} alt='coffee' width='329px' height='355px' />
        <div className={styles.rightBlock}>
          <AboutTitle>О наших зернах</AboutTitle>
          <div className={styles.countryInfo}>
            <span>Страна: </span>
            <span>{selectedItem.country}</span>
          </div>
          <p className={styles.description}>
            <span>Описание: </span>
            {/* Текст Lorem ipsum */}
          </p>
          <div className={styles.priceInfo}>
            <span>Цена: </span>
            <span>{selectedItem.price}$</span>
          </div>
        </div>
      </Wrapper>
    </>
  );
}, (prevProps, nextProps) => prevProps.cardId === nextProps.cardId);

export default AboutCard;
