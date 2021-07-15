import React, { useContext } from 'react'
import { ThemeContext } from '../ConTexts/ThemeContext'
const ToggleTheme = () => {
    const {ToggleTheme}=useContext(ThemeContext)

    return (
        <div className='toggle-btn'>
            <button type='button' onClick={ToggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ToggleTheme
