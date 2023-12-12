import React from 'react';
import styles from './Collections.module.css';

export default function Collections() {
  return (
    <section className={styles.collections_section}>
      <h2 className={styles.title}>Новые коллекции</h2>
      <div class="upper-collections">
        <div class="button-collection1">
          <div class="image-wrapper1">
            <img class="collection-1-wrapper" src="/img/collection1.png" alt="" />
          </div>
          <div class="collection1-title">New era — New Rules New life & emotions</div>
          <div class="link-wrapper1">
            <a class="collection1-link" href="">
              Cмотреть
            </a>
          </div>
        </div>

        <img class="image-collection2" src="img/collection2.png" alt="" />

        <img class="image-collection3" src="img/collection3.png" alt="" />

        <div class="down-collection">
          <img class="image-collection4" src="img/collection4.png" alt="" />

          <img class="image-collection5" src="img/collection5.png" alt="" />

          <div class="button-collection6">
            <div class="collection6-title">Be Royal Be Yourself every time anywhere</div>
            <div class="link-wrapper6">
              <a class="collection1-link" href="">
                Cмотреть
              </a>
            </div>
            <div class="image-wrapper6">
              <img class="collection-6-wrapper" src="/img/collection6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
