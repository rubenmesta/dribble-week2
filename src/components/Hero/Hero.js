import React from 'react';
import styles from './styles.module.css';
import cx from 'classnames';

export const Hero = () => {
  return (
    <main>
      <div className={styles.bg}>
        <div
          className={cx(
            styles.content_wrapper,
            'row flex-lg-row align-items-center g-5 py-5'
          )}
        >
          <div className="col-lg-6">
            <h1 className={cx(styles.title, 'display-5 fw-bold  lh-1 mb-3')}>
              Asian Fusion
            </h1>
            <h2 className={styles.subtitle}>Cusine</h2>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Make a Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
