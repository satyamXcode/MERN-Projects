import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext';

const Button = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <button
    style={{ background: theme === 'dark' ? '#333' : '#FFF' }}
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >Toggle Theme</button>
  )
}

export default Button;