import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ handler, children }) => {
  return (
    <StyledButton type="button" onClick={handler}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  handler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
