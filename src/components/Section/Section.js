import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
      <div style={{ margin: '15px' }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
