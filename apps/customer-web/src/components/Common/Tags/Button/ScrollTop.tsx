import styles from '../Button/styles/scroll-top.module.scss';

const ScrollTop = () => {
  return (
    <span className={styles['btn-scrollUp']}>
      <button
        className="ui-btn ui-btn-primary ui-btn-md ui-btn-icon"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <i className="fa-chevron-double-up"></i>
      </button>
    </span>
  );
};
export default ScrollTop;
