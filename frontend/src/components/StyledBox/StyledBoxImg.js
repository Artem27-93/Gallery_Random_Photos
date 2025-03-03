import clsx from 'clsx';
import classes from './StyledBoxImg.module.css';

export default function StyledBoxImg({ className, children, ...rest }) {
  return (
    <div className={clsx(classes.box, className)} {...rest}>
      {children}
    </div>
  );
}
