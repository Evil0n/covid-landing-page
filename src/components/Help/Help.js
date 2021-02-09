import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

import './Help.scss';

export const Help = ({ position }) => {
  const classHelp = cn('help', { [position]: position });
  return (
    <>
      <div className={classHelp}>
        <div className='help__title'>
          <h2 className='title'>
            У вас остались вопросы ? <br /> Мы постараемся вам помочь
          </h2>
        </div>
        <div className='help-sub'>
          <div className='help__post'>
            <input
              className='email-input'
              type='email'
              placeholder='test@gmail.com'
            />
          </div>
          <input className='help__button' type='button' value='Send' />
        </div>
      </div>
    </>
  );
};

Help.propTypes = {
  position: string,
};
