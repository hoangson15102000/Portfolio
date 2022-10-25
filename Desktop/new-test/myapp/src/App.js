import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';


function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { console.log(data) }
  return (
    <Fragment>

      <form onSubmit={handleSubmit(onSubmit)} className='z-0 px-4 py-4 my-32 max-w-xl mx-auto space-y-6 bg-gray-100 rounded-md '>
        <h1 className='text-black font-semibold text-3xl hover:text-blue-700 '>Facebook</h1>
        <div className='text-md'>
          <label className="hover:text-blue-700" htmlFor="email">Email address</label>
          <input
            className='border border-gray-200 block w-full py-2 px-4 rounded focus:outline-none focus:border-teal-400 '
            type="text" name="name"
            id="name"
            {...register("name", {
              required: true, pattern: /^ [\w-\.]+@([\w-]+\.)+[\w-]{2, 4}$/g
            })}
          />
          {Object.keys(errors).length !== 0 && (
            <ul>
              {errors.name?.type === 'required' && <li className='text-red-600 text-sm'>Vui lòng nhập email</li>}
              {errors.name?.type === 'pattern' && <li className='text-red-600 text-sm'>Email không hợp lệ</li>}

            </ul>
          )}

        </div>
        <div className='text-md'>
          <label className="hover:text-blue-700" htmlFor="password">Password</label>
          <input
            className='border border-gray-200 block w-full py-2 px-4 rounded focus:outline-none focus:border-teal-400'
            type="password"
            name="password"
            id="password"
            {...register("password", { required: true, minLength: 8 })}
          />
          {Object.keys(errors).length !== 0 && (
            <ul>
              {errors.password?.type === 'required' && <li className='text-red-600 text-sm'>Vui lòng nhập mật khẩu</li>}
              {errors.password?.type === 'pattern' && <li className='text-red-600 text-sm'>Mật khẩu không hợp lệ</li>}

            </ul>
          )}

        </div>
        <div className='flex justify-center z-50'><button type="submit" className="font-bold w-40 text-xl py-2 px-4 border border-transparent rounded-md  text-white bg-indigo-800 hover:!bg-indigo-500 hover:!duration-500  ">Login</button></div>

      </form >

    </Fragment >

  );
}

export default App;
