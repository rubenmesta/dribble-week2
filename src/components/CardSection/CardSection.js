import React from 'react';
import styles from './card-section.module.css';
import cx from 'classnames';

export const CardSection = () => {
  return (
    <div className={styles.bg}>
      <div className="wrapper">
        <div className={styles.section}>
          <div className="album py-5 ">
            <div className={styles.section_wrapper}>
              <h3>Events & Specials</h3>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-5 justify-content-center">
                <div className="col-m-12 col-md-3">
                  <div className="card shadow-sm">
                    <img src="/img/food6.jpg" />

                    <div className={cx(styles.card_body, 'card-body')}>
                      <h4>Mondays</h4>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
                            Learm more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col=sm-12 col-md-3">
                  <div className="card shadow-sm">
                    <img src="/img/food8.jpg" />
                    <div className={cx(styles.card_body, 'card-body')}>
                      <h4>Wednesdays</h4>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
                            Learm more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col=sm-12 col-md-3">
                  <div className="card shadow-sm">
                    <img src="/img/food7.jpg" />
                    <div className={cx(styles.card_body, 'card-body')}>
                      <h4>Thusrdays</h4>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
                            Learm more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
