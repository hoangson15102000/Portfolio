import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as ReactBootStrap from 'react-bootstrap'





function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => { console.log(data) };
  const [isLoading, setIsLoading] = useState(false);

  const onClickAPI = async () => {
    try {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
          setIsLoading(true);
          setTimeout(() => {
            if (response.status === 200) {
              setIsLoading(false)
            }
          }, 5000)

        })

    } catch (e) { console.log(e) }
  }







  return (
    <Fragment>
      {/* <form onSubmit={handleSubmit(onSubmit)} className='z-0 px-4 py-4 my-32 max-w-xl mx-auto space-y-6 bg-gray-100 rounded-md '>
        <h1 className='text-black font-semibold text-3xl hover:text-blue-700 '>Facebook</h1>
        <div className='text-md'>
          <label className="hover:text-blue-700" htmlFor="email">Email address</label>
          <input
            className='border border-gray-200 block w-full py-2 px-2 rounded focus:outline-none focus:border-teal-400'
            type="text" name="name"
            id="name"
            {...register("name", {
              required: "Vui lòng nhập địa chỉ email", pattern: { value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, message: 'Email không hợp lệ' }
            })}
          />
          {errors.name && <p className='text-red-600 text-sm'>{errors.name.message}</p>}


        </div>
        <div className='text-md'>
          <label className="hover:text-blue-700" htmlFor="password">Password</label>
          <input
            className='border border-gray-200 block w-full py-2 px-2 rounded focus:outline-none focus:border-teal-400'
            type="password"
            name="password"
            id="password"
            {...register("password", { required: "Vui lòng nhập mật khẩu", minLength: { value: 8, message: "Mật khẩu tối thiểu 8 ký tự" } })}
          />
          {errors.password && <p className='text-red-600 text-sm'>{errors.password.message}</p>}

        </div>

        <div className='flex justify-center z-50'><button onClick={onClickAPI} type="submit" className="  font-bold w-40 text-xl py-2 px-4 border border-transparent rounded-md  text-white bg-indigo-800 hover:!bg-indigo-500 hover:!duration-500  ">
          Login</button></div>


      </form > */}
      {isLoading ? <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'><ReactBootStrap.Spinner animation="border" /><p>Loading</p></div> : <form onSubmit={handleSubmit(onSubmit)} className='z-0 px-4 py-4 my-32 max-w-xl mx-auto space-y-6 bg-gray-100 rounded-md '>
        <h1 className='text-black font-semibold text-3xl hover:!text-blue-700 '>Facebook</h1>
        <div className='text-md'>
          <label className="hover:text-blue-700" htmlFor="email">Email address</label>
          <input
            className='border border-gray-200 block w-full py-2 px-2 rounded focus:outline-none focus:border-teal-400'
            type="text" name="name"
            id="name"
            {...register("name", {
              required: "Vui lòng nhập địa chỉ email", pattern: { value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, message: 'Email không hợp lệ' }
            })}
          />
          {errors.name && <p className='text-red-600 text-sm'>{errors.name.message}</p>}


        </div>
        <div className='text-md'>
          <label className="hover:text-blue-700" htmlFor="password">Password</label>
          <input
            className='border border-gray-200 block w-full py-2 px-2 rounded focus:outline-none focus:border-teal-400'
            type="password"
            name="password"
            id="password"
            {...register("password", { required: "Vui lòng nhập mật khẩu", minLength: { value: 8, message: "Mật khẩu tối thiểu 8 ký tự" } })}
          />
          {errors.password && <p className='text-red-600 text-sm'>{errors.password.message}</p>}

        </div>

        <div className='flex justify-center z-50'><button onClick={onClickAPI} type="submit" className="  font-bold w-40 text-xl py-2 px-4 border border-transparent rounded-md  text-white bg-indigo-800 hover:!bg-indigo-500 hover:!duration-500  ">
          Login</button></div>


      </form >}

    </Fragment >

  );
}

export default App;
