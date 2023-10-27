import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../../redux/user/userSlice';


export default function SignIn() {
  const [formData, setFormData] = useState({})
  const {loading,error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) =>{
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      });
  };
  const handleSubmit =  async (e)=>{
    e.preventDefault();
    try { 
    dispatch(signInStart());
      const res = await fetch('/api/auth/signin',
      {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if(data.success === false){
        dispatch(signInFailure(data.message));
        return;
      }
     dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div onSubmit={handleSubmit} className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold 
      my-7'>Sign-In</h1>
      <form className='flex flex-col gap-4'>
      
      <input type="email" placeholder='example@gamil.com' 
      id ='email' className='border p-3 rounded-lg'onChange={handleChange}/>
      <input type="password" placeholder='password' 
      id ='password' className='border p-3 rounded-lg'onChange={handleChange}/>
      <button disabled={loading} className='bg-slate-700 text-white p-3
      rounded-lg uppercase hover:opacity-95
      disabled:opacity-80'>
        {loading ? 'loading...': 'Sign-In'}
        </button>
      </form>
     <div className="flex gap-2 mt-5">
      <p>Do not Have an account?</p>
      <Link to={"/sign-in"}>
        <span className='text-blue-700'>Sign In</span>
      </Link>
     </div>
     {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}
