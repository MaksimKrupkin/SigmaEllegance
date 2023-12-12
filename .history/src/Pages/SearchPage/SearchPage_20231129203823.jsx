import React from 'react';
import styles from './SearchPage.module.css';

export default function SearchPage() {
  return (
    <main class="main">
      <div className="search-box">
        <input type="text" placeholder="Что вы ищите?" className="search-field" />
        <button className="search-glass"></button>
        <div className="search-button-wrapper">
          <button className="search-cross"></button>
        </div>
      </div>

      <div className="often-variants">
        <div className="often-variants-title">Популярные запросы</div>

        <div className="often-variants-items">
          <div className="often-variant-item1">
            <a href="" className="often-variant-link">
              {' '}
              костюм тройка{' '}
            </a>
          </div>
          <div className="often-variant-item1">
            <a href="" className="often-variant-link">
              фрак
            </a>
          </div>
          <div className="often-variant-item1">
            <a href="" className="often-variant-link">
              смокинг
            </a>
          </div>
          <div className="often-variant-item1">
            <a href="" className="often-variant-link">
              костюм на заказ{' '}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
