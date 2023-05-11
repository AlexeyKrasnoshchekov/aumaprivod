import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';
import Image from 'next/image';

const Card = ({
  children,
  className,
  type,
  icon = 'none',
  ...props
}: CardProps) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1400px)' });

  return (
    <div className={cn(styles.card, className)} {...props}>
      {type === 'privod' && (
        <div className={icon !== 'none' ? styles.wrapper : ''}>
          {icon !== 'none' && icon === 'mnogo' && (
            <span className={styles.icon}>
              <Image
                src={'/images/privod_cards/mnogo.png'}
                alt="МНОГООБОРОТНЫЕ ПРИВОДЫ"
                width={isBigScreen ? 80 : 60}
                height={isBigScreen ? 80 : 60}
              />
            </span>
          )}
          {icon !== 'none' && icon === 'nepoln' && (
            <span className={styles.icon}>
              <Image
                src={'/images/privod_cards/nepoln.png'}
                alt="НЕПОЛНООБОРОТНЫЕ ПИВОДЫ"
                width={isBigScreen ? 80 : 60}
                height={isBigScreen ? 80 : 60}
              />
            </span>
          )}
          {icon !== 'none' && icon === 'pryamo' && (
            <span className={styles.icon}>
              <Image
                src={'/images/privod_cards/pryamo.png'}
                alt="ПРЯМОХОДНЫЕ ПРИВОДЫ"
                width={isBigScreen ? 80 : 60}
                height={isBigScreen ? 80 : 60}
              />
            </span>
          )}
          {icon !== 'none' && icon === 'rychag' && (
            <span className={styles.icon}>
              <Image
                src={'/images/privod_cards/rychag.png'}
                alt="РЫЧАЖНЫЕ ПРИВОДЫ"
                width={isBigScreen ? 80 : 60}
                height={isBigScreen ? 80 : 60}
              />
            </span>
          )}
          {icon !== 'none' && icon === 'nepoln_red' && (
            <span className={styles.icon}>
              <Image
                src={'/images/privod_cards/nepoln_red.png'}
                alt="НЕПОЛНООБОРОТНЫЕ РЕДУКТОРЫ"
                width={isBigScreen ? 80 : 60}
                height={isBigScreen ? 80 : 60}
              />
            </span>
          )}
          {icon !== 'none' && icon === 'mnogo_red' && (
            <span className={styles.icon}>
              <Image
                src={'/images/privod_cards/mnogo_red.png'}
                alt="МНОГООБОРОТНЫЕ РЕДУКТОРЫ"
                width={isBigScreen ? 80 : 60}
                height={isBigScreen ? 80 : 60}
              />
            </span>
          )}
          {icon !== 'none' && icon === 'controls' && (
            <span className={styles.icon}>
              <Image
                src={'/images/privod_cards/controls.png'}
                alt="СРЕДСТВА УПРАВЛЕНИЯ"
                width={isBigScreen ? 80 : 60}
                height={isBigScreen ? 80 : 60}
              />
            </span>
          )}
          {icon !== 'none' && icon === 'rychag_red' && (
            <span className={styles.icon}>
              <Image
                src={'/images/privod_cards/rychag_red.png'}
                alt="Рычажные редукторы"
                width={isBigScreen ? 80 : 60}
                height={isBigScreen ? 80 : 60}
              />
            </span>
          )}
          <p style={{textAlign: 'center'}}>{children}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
