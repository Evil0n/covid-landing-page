import React from 'react';

import './WhatShouldDo.scss';

export const WhatShouldDo = () => {
  return (
    <>
      <div id='protection' className='what-should-do'>
        <div className='what-should-do__text'>
          <h2 className='title'>
            <span className='title-orange'>Covid-19 </span> <br />
            Как себя обезопасить?
          </h2>
          <p className='text'>
            С помощью нескольких простых мер, которые советует Всемирная
            организация здравоохранения, <br /> вы можете уменьшить свои шансы
            заболеть или распространить вирус COVID-19.
          </p>
        </div>
        <div className='protected'>
          <div className='protected__item'>
            <div className='protected__info'>
              <div className='info-number'>01</div>
              <div className='info-text'>
                <div className='info-text__title'>Наденьте маску</div>
                <p className='info-text__prgh'>
                  В преддверии сезонного подъёма заболеваемости гриппом и
                  другими респираторными вирусными инфекциями Роспотребнадзор
                  напоминает о целесообразности использования одноразовой
                  медицинской маски в качестве эффективной меры профилактики
                  заражения и распространения инфекции.
                </p>
              </div>
            </div>
            <div className='protected__img mobile'>
              <img
                className='protected-girl'
                src={process.env.PUBLIC_URL+'/static/img/Mask.png'}
                alt='Mask'
              />
            </div>
            <div className='protected__img'>
              <img
                className='protected-girl'
                src={process.env.PUBLIC_URL+'/static/img/Mask.png'}
                alt='Mask'
              />
            </div>
          </div>
          <div className='protected__item'>
            <div className='protected__img'>
              <img
                className='protected-girl'
                src={process.env.PUBLIC_URL+'/static/img/WashHand.png'}
                alt='WashHand'
              />
            </div>
            <div className='protected__info'>
              <div className='info-number'>02</div>
              <div className='info-text'>
                <div className='info-text__title'>Мойте руки</div>
                <p className='info-text__prgh'>
                  Гигиена рук — это важная мера профилактики распространения
                  гриппа и коронавирусной инфекции. Мытье с мылом удаляет
                  вирусы. Если нет возможности помыть руки с мылом, пользуйтесь
                  спиртсодержащими или дезинфицирующими салфетками.
                </p>
              </div>
            </div>
            <div className='protected__img mobile'>
              <img
                className='protected-girl'
                src={process.env.PUBLIC_URL+'/static/img/WashHand.png'}
                alt='WashHand'
              />
            </div>
          </div>
          <div className='protected__item'>
            <div className='protected__info'>
              <div className='info-number'>03</div>
              <div className='info-text'>
                <div className='info-text__title'>
                  Используйте носовой платок
                </div>
                <p className='info-text__prgh'>
                  При чихании и кашле желательно использовать бумажные носовые
                  платки, в противном случае используйте тканевый носовой
                  платок, но не забывайте стирать его ежедневно и проглаживать с
                  обеих сторон.
                </p>
              </div>
            </div>
            <div className='protected__img mobile'>
              <img
                className='protected-girl'
                src={process.env.PUBLIC_URL+'/static/img/Rag.png'}
                alt='Nose Rag'
              />
            </div>
            <div className='protected__img'>
              <img
                className='protected-girl'
                src={process.env.PUBLIC_URL+'/static/img/Rag.png'}
                alt='Nose Rag'
              />
            </div>
          </div>
          <div className='protected__item'>
            <div className='protected__img'>
              <img
                className='protected-girl'
                src={process.env.PUBLIC_URL+'/static/img/ContactGirl.png'}
                alt='Contact'
              />
            </div>
            <div className='protected__info'>
              <div className='info-number'>04</div>
              <div className='info-text'>
                <div className='info-text__title'>Избегайте контакты</div>
                <p className='info-text__prgh'>
                  Ограничьте по возможности при приветствии тесные объятия и
                  рукопожатия. Избегайте близких контактов и пребывания в одном
                  помещении с людьми, имеющими видимые признаки ОРВИ (кашель,
                  чихание, выделения из носа). Пользуйтесь только
                  индивидуальными предметами личной гигиены.
                </p>
              </div>
            </div>
            <div className='protected__img mobile'>
              <img
                className='protected-girl'
                src={process.env.PUBLIC_URL+'/static/img/ContactGirl.png'}
                alt='Contact'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
