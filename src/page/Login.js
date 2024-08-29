import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logingUser = (event) => {
    event.preventDefault();
    // setAuthenticate(true);
    dispatch(authenticateAction.login(id, password));
    navigate("/");
  };

  return (
    <div className='login-container'>
      <div className='login-box'>
        <div className='title-area'>
          <h1>로그인</h1>
          <p>다양한 할인 혜택과 이벤트, 보너스 쿠폰을 놓치지 마세요</p>
        </div>
        <form className='form-area' onSubmit={(event) => logingUser(event)}>
          <label htmlFor="login-id">아이디</label>
          <input type="text" id="login-id" onChange={(event) => setId(event.target.value)}></input>
          <label htmlFor="login-pw">비밀번호</label>
          <input type="password" id="login-pw" autoComplete='on'onChange={(event) => setPassword(event.target.value)}></input>
          <button type='submit'>로그인</button>
        </form>
      </div>
    </div>
  )
}

export default Login