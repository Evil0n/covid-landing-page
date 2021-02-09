import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';
import './CovidAlert.scss';

export const CovidAlert = ({ position }) => {
  const alertClass = cn('covid-alert', { [position]: position });
  return (
    <>
      <div className={alertClass}>
        <div className='covid-alert__text'>
          <h2 className='title'>
            <span className='title-orange'>COVID-19 Меры предосторожности</span> <br />
            Соблюдайте режим самоизоляции <br /> Помогите остановить коронавирус
          </h2>
          <p className='alert-text'>
            Самоизоляция является вынужденной мерой, чтобы замедлить
            распространение инфекции и уменьшить количество заболевших. Это
            отличная мера профилактики в условиях отсутствия вакцины.
          </p>
        </div>
        <img
          className='covid-alert__img'
          src={process.env.PUBLIC_URL+'/static/img/Girl.png'}
          alt='girl on sofa'
        />
      </div>
    </>
  );
};

CovidAlert.propTypes = {
  position: string,
};
