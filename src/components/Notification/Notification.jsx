import PropTypes from 'prop-types';
import { StyledNotification } from './Notifications.styled';

export const Notification = ({ message }) => {
  return <StyledNotification>{message}</StyledNotification>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
