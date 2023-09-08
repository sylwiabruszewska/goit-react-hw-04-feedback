import PropTypes from 'prop-types';
import { StyledIcon } from './FeedbackOptions.styled';
import { faSmile, faMeh, faFrown } from '@fortawesome/free-regular-svg-icons';
import { Button } from '../Button/Button';

const getIcon = icon => <StyledIcon icon={icon} size="2xl" />;

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const iconMap = {
    good: getIcon(faSmile),
    neutral: getIcon(faMeh),
    bad: getIcon(faFrown),
  };

  return (
    <>
      {options &&
        options.map(option => (
          <Button key={option} handler={() => onLeaveFeedback(option)}>
            <span>{iconMap[option]}</span>
            <span>{option}</span>
          </Button>
        ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
