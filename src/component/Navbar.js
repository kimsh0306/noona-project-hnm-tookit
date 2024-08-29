import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Person, PermIdentity, Search } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Navbar = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const dispatch = useDispatch();
  const authenticate = useSelector((state) => state.auth.authenticate);
  const [menuToggle, setMenuToggle] = useState(false);
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

  const navigate = useNavigate();

  const loginBtn = () => {
    if (authenticate) {
      // setAuthenticate(false);
      // 
      // dispatch(productAction.getProducts(searchQuery));
      dispatch(authenticateAction.logout());
      navigate("/");
    } else {
      navigate("/login")
    };
  };

  const searchBtn = (event) => {
    if (event.code === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const logoBtn = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log("authenticate: ", authenticate);
  }, [authenticate])

  return (
    <div className='nav-container'>
      <div className="nav-top-area">
        <div className='nav-login-box' onClick={loginBtn}>
          <IconButton aria-label="login" size="small" >
            {authenticate ? <Person className='login-icon' /> : <PermIdentity className='login-icon' />}
          </IconButton>
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
        <div className='nav-search-box'>
          <IconButton aria-label="search" size="small">
            <Search />
          </IconButton>
          <input type="text" placeholder='검색' onKeyDown={searchBtn} />
        </div>
      </div>
      <div className='nav-logo-area'>
        <img
          onClick={logoBtn}
          className='nav-logo'
          width={60}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s" />
      </div>
      <div className='nav-menu-area'>
        {matches
          ?
          <ul className='nav-menu-list'>
            {menuList.map((menu, idx) => (
              <li key={idx}>{menu}</li>
            ))}
          </ul>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default Navbar
