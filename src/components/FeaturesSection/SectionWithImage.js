import React from 'react';
import styles from './section.module.css';
import cx from 'classnames';

export const SectionWithImage = () => {
  return (
    <div className="wrapper">
      <div className={styles.section}>
        <div className="row">
          <div className={cx(styles.feature_body, 'col-md-6')}>
            <div className={styles.section_title}>
              <h5>What's on the menu</h5>
              <h2>MENUS</h2>
            </div>
            <div className={styles.section_body}>
              <h2
                className={cx(
                  styles.section_subtitle,
                  'featurette-heading fw-normal lh-1'
                )}
              >
                First featurette heading.{' '}
              </h2>
              <p className="lead">
                Some great placeholder content for the first featurette here.
                Imagine some exciting prose here.
              </p>
              <button
                type="button"
                className={cx(
                  styles.button,
                  'btn btn-primary btn-lg px-4 me-md-2'
                )}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div
              style={{
                backgroundImage: 'url("/img/food1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '500px',
              }}
              width={500}
              height="auto"
            />
            {/* <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                500x500
              </text>
            </svg> */}
          </div>
        </div>

        <div className="row featurette">
          <div className={cx(styles.feature_body, 'col-md-6 order-md-2')}>
            <div className={styles.section_title}>
              <h5>Lorem ipsum dolor sit amet</h5>
              <h2>Reservations</h2>
            </div>
            <div className={styles.section_body}>
              <h2
                className={cx(
                  styles.section_subtitle,
                  'featurette-heading fw-normal lh-1'
                )}
              >
                Oh yeah, it’s that good.{' '}
              </h2>
              <p className="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
              <button
                type="button"
                className={cx(
                  styles.button,
                  'btn btn-primary btn-lg px-4 me-md-2'
                )}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <div
              style={{
                backgroundImage: 'url("/img/food4.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '500px',
              }}
              width={500}
              height="auto"
            />
          </div>
        </div>

        <div className="row featurette">
          <div className={cx(styles.feature_body, 'col-md-6')}>
            <div className={styles.section_title}>
              <h5>Lorem ipsum dolor sit amet</h5>
              <h2>Private Dining</h2>
            </div>
            <div className={styles.section_body}>
              <h2
                className={cx(
                  styles.section_subtitle,
                  'featurette-heading fw-normal lh-1'
                )}
              >
                And lastly, this one.{' '}
              </h2>
              <p className="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
              <button
                type="button"
                className={cx(
                  styles.button,
                  'btn btn-primary btn-lg px-4 me-md-2'
                )}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div
              style={{
                backgroundImage: 'url("/img/food5.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '500px',
              }}
              width={500}
              height="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
