import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

import './Symptomps.scss';

export const Symptomps = ({ position }) => {
  const symptomClass = cn('symptomps', { [position]: position });
  return (
    <>
      <div id='symptomps' className={symptomClass}>
        <div className='symptomps__text'>
          <h2 className='title'>
            <span className='title-orange'>Covid-19 </span> <br />
            Симптомы
          </h2>
          <p className='text'>
            Коронавирусная инфекция COVID-19 воздействует на различные группы
            людей в разной степени. <br /> У большинства инфицированных болезнь
            протекает в легкой или средней форме тяжести, <br /> и им не
            требуется госпитализация.
          </p>
        </div>
        <div className='symptomps__img'>
          <img
            className='img-smpt-bg'
            src={process.env.PUBLIC_URL+'/static/img/Bg_symptopms.png'}
            alt='BG Symptomps'
          />
          <img
            className='img-smpt'
            src={process.env.PUBLIC_URL+'/static/img/Symptomps.png'}
            alt='Symptomps'
          />
        </div>
      </div>
    </>
  );
};

Symptomps.propTypes = {
  position: string,
};
