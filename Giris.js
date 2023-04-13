import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import styled from 'styled-components';
import resim from './img/Login.png';
import icon from './img/icon.png';

import visibleIcon from './img/visible-password.png';
import invisibleIcon from './img/visible-passwrod2.png'

const StyledLogin = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100vh; 

  .login-container{
    background-color : #02307a;    
    display : flex;
    width : 70%;
  }
  .sol{
    flex :1;
  }
  .sag{
    flex :2;
    padding : 15px;
    padding-top : 80px;

    form{
      .form-element {
        position : relative;
      }
      
      input{
        width :75%;
        border : none;
        border-bottom : 3px solid;
        font-size : 18px;
        ::placeholder {
          color : red;
        }
        
      }
    }
    .text{
      align-items : center;
    }
  }
`;

function Giris() {

  useEffect(() =>{
    var isLogin = sessionStorage.getItem("isLogin");
    if(isLogin == "false"){
      navigate("/");
    }
  })



const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error ,setError] = useState('');
const navigate = useNavigate();
//Sifre goster
const  [visiblePassword , setVisiblePassword] = useState(false);

   
const handleSubmit = (e) =>{
    e.preventDefault();

    let isLogin = false;

   
    //sessionStorage'da kullanıcı bilgilerini al.
    const kullanici_Adi = sessionStorage.getItem('email'); //email değerini erişiliyor: getItem
    const sifre = sessionStorage.getItem('password');

    
    if(kullanici_Adi == email && sifre == password){
        isLogin = true;
        sessionStorage.setItem("isLogin", isLogin);
        navigate('/Anasayfa');
    }
    else{
        setError('Hatali kullanici adi veya sifre girdiniz.');
    }
   // kullanici bilgilerini session'a kayd et.
    // sessionStorage.setItem("email",kullanici_Adi);
    // sessionStorage.setItem("password",sifre);

    //Formu temizle 
    setEmail('');
    setPassword('');
}
  return (
    
        <StyledLogin>
        <div className='login-container'>
        <div className='sol'>
          <img  src={resim} alt ="Login"/>
        </div>
        <div className='sag'>
          <form onSubmit={handleSubmit}>
            <div className='form-elemet'>
              <input  placeholder='E-mail adresiniz ' type="email" value={email} onChange ={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className='form-elemet'>
            <input 
            placeholder='Parolanız ' value={password} onChange ={(e) => setPassword(e.target.value)} required
            type={visiblePassword ? 'text' : 'password'}  style={{marginTop : '25px' , marginBottom : '25px'}}/>

            {visiblePassword ? (<img onClick={() => setVisiblePassword(false)} src={invisibleIcon} alt ="visible-password" style={{height : '33px' , width : '30px'}}/>) 
            : (<img onClick={() => setVisiblePassword(true)} src={visibleIcon} alt ="visible-password" style={{height : '34px' , width : '30px'}} />) }

            </div>
            <div className='form-element form-element-submit'>
              <button ><img src={icon} style={{width : '40px'}} /></button>
            </div>
          </form>
          {error && <p style={{color :'red'}}> {error} </p>}
          <div className='text'>
            <p style={{color : 'white', marginTop : '45px'}}>
                Henüz kaydın yok mu ? <button className='btn btn-light'><Link to='/kayit'>Kayıt Ol</Link></button> 
            </p>
          </div>
          
        </div>
      </div>


        </StyledLogin>

 
  )
}

export default Giris;