import React from 'react';
import { FacebookIcon } from '../../icons/FacebookIcon';
import { YouTubeIcon } from '../../icons/YouTubeIcon';
import { VimeoIcon } from '../../icons/VimeoIcon';
import { TwitterIcon } from '../../icons/TwitterIcon';

import cn from 'classnames';
import { string } from 'prop-types';

import './Footer.scss';

export const Footer = ({ position }) => {
  const footerClass = cn('footer', { [position]: position });
  return (
    <>
      <div className={footerClass}>
        <div className='footer__logo'>
          <img
            alt='covid-19'
            src={process.env.PUBLIC_URL+'/static/img/coronavirus.png'}
            className='logo__img'
          />
          <span className='logo__text'>covid-19</span>
        </div>
        <div className='menu'>
          <ul className='footer__menu'>
            <li className='tab'>
              <a className='tab-link' href='#overview'>
                Общая информация
              </a>
            </li>
            <li className='tab'>
              <a className='tab-link' href='#contagion'>
                Пути передачи
              </a>
            </li>
            <li className='tab'>
              <a className='tab-link' href='#symptomps'>
                Симптомы
              </a>
            </li>
            <li className='tab'>
              <a className='tab-link' href='#protection'>
                Способы защиты
              </a>
            </li>
          </ul>
          <ul className='footer__socials'>
            <li className='social-tab'>
              <FacebookIcon />
            </li>
            <li className='social-tab'>
              <VimeoIcon />
            </li>
            <li className='social-tab'>
              <YouTubeIcon />
            </li>
            <li className='social-tab'>
              <TwitterIcon />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

Footer.propTypes = {
  position: string,
};
