import ReactDOM from 'react-dom';

import classes from './notification.module.css';
import Portal from '../../hoc/portal';

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <Portal>
      <div className={cssClasses}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </Portal>
  );
}

export default Notification;
