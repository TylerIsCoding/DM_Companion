import React from 'react'
import './login.css'

const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form)
    console.log(formData)
  }
  return (
    <form method='post' onSubmit={handleSubmit} className='form__login'>
      <label className='label__email'>
        Email: <input name="input__email" placeholder='Enter your email address'></input>
      </label>
      <label className='label__password'>
        Password: <input name="input__password" placeholder='Enter your password'></input>
      </label>
      <label className='label__rememberMe'>
        <input type="checkbox" name="input__rememberMe" defaultChecked={false}></input>Remember me
      </label>
    </form>
  )
}

export default Login