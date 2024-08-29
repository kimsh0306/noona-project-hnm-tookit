import React, { useState } from 'react'
import { Menu, Close } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SideMenu = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const [openMenu, setOpenMenu] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#c4c4c4",
        // light: main값을 통해 계산됨
        // dark: main값을 통해 계산됨
        // contrastText: main값을 통해 계산됨
      },
    }
  });

  const sidebarBtn = () => {
    setOpenMenu(prev => !prev);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='side-menu-top'>
        <IconButton aria-label="search" size="small" onClick={sidebarBtn}>
          <Menu />
        </IconButton>
      </div>
      <div className={openMenu ? 'side-menu-area open' : 'side-menu-area'}>
        <div className='side-menu-close'>
          <IconButton aria-label="search" size="small" onClick={sidebarBtn}>
            <Close color='primary' />
          </IconButton>
        </div>
        <div className='side-menu-box'>
          <ul className='side-menu-list'>
            {menuList.map((menu, idx) => (
              <li key={idx}>{menu}</li>
            ))}
          </ul>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default SideMenu
