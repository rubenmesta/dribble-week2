import React from 'react';
import styles from './info.module.css';
import cx from 'classnames';

export const Features = () => {
  return (
    <div className="wrapper">
      <section class={styles.features}>
        <div class={styles.feature_container}>
          <div class={styles.feature_item}>
            <i className={cx(styles.icon, 'fas fa-book-open')}></i>

            <h3 class={styles.feature_item_title}>Menus</h3>
            <p class={styles.feature_item_body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod
            </p>
          </div>
          <div class={styles.feature_item}>
            <i className={cx(styles.icon, 'fas fa-calendar-alt')}></i>
            <h3 class={styles.feature_item_title}>Reservations</h3>
            <p class={styles.feature_item_body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod
            </p>
          </div>
          <div class={styles.feature_item}>
            <i className={cx(styles.icon, 'fas fa-utensils')}></i>
            <h3 class={styles.feature_item_title}>Private Dining</h3>
            <p class={styles.feature_item_body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod
            </p>
          </div>
          <div class={styles.feature_item}>
            <i className={cx(styles.icon, 'fas fa-gift')}></i>
            <h3 class={styles.feature_item_title}>Gift Cards</h3>
            <p class={styles.feature_item_body}>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
