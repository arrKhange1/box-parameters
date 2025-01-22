import { useContext } from 'react';
import { ThemeContext } from '../app/App';
import cls from './ThemeSwitcher.module.css';
import lightImg from '../ui/icons/light.svg';
import darkImg from '../ui/icons/dark.svg';

interface ThemeSwitcherProps {
  toggleTheme: () => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme }) => {
  const isLight = useContext<boolean>(ThemeContext);
  return (
    <button className={cls.switcher} onClick={() => toggleTheme()}>
      {isLight && <img className={cls.switcherIcon} src={lightImg} />}
      {!isLight && <img className={cls.switcherIcon} src={darkImg} />}
    </button>
  );
};
