import React, { Component } from 'react';
import cn from 'classnames';
import { string } from 'prop-types';
import './Header.scss';

export class Header extends Component {
  state = {
    open: false,
  };

  openMenu = () => {
    const openMenu = this.state.open;
    this.setState({ open: !openMenu });
  };

  render() {
    const { position } = this.props;
    const headerClass = cn('header', { [position]: position });
    const navMenuClass = cn('header__nav', { open: this.state.open });
    const navMenuOpenClass = cn('header__nav-menu', {
      'open-nav': this.state.open,
    });
    return (
      <>
        <div className={headerClass}>
          <div className='header__logo'>
            <img
              alt='covid-19'
              src={process.env.PUBLIC_URL+'/static/img/coronavirus.png'}
              className='logo__img'
            />
            <span className='logo__text'>covid-19</span>
          </div>
          <div onClick={this.openMenu} className={navMenuClass}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className='header__menu adaptive'>
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
        </div>
        <div className={navMenuOpenClass}>
          <ul className='nav-menu'>
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
        </div>
      </>
    );
  }
}

Header.propTypes = {
  position: string,
};
