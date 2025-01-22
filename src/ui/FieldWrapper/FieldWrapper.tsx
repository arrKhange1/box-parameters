import { PropsWithChildren } from 'react';
import cls from './FieldWrapper.module.css';

interface FieldWrapperProps {}

interface FieldWrapperProps extends PropsWithChildren {
  title: string;
  errorMessage?: string;
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({ title, errorMessage, children }) => {
  return (
    <div className={cls.fieldWrapper}>
      <label>{title}</label>
      {children}
      {errorMessage && <span className={cls.fieldError}>{errorMessage}</span>}
    </div>
  );
};
