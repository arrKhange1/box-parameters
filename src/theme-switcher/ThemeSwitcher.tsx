import { useContext } from 'react';
import { ThemeContext } from '../app/App';
import cls from './ThemeSwitcher.module.css';

interface ThemeSwitcherProps {
  toggleTheme: () => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme }) => {
  const isLight = useContext<boolean>(ThemeContext);
  return (
    <button className={cls.switcher} onClick={() => toggleTheme()}>
      {isLight && <img className={cls.switcherIcon} src="src/ui/icons/dark.svg" />}
      {!isLight && <img className={cls.switcherIcon} src="src/ui/icons/light.svg" />}
    </button>
  );
};
