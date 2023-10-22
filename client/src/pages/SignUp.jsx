import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserMutation } from '../services/userApi';


const SignUp = () => {
  const [addUser, { isLoading, error, data }] = useCreateUserMutation();
  console.log(data);

  const navigate = useNavigate();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().min(5, 'Enter at least 5 characters').required("Username can't be empty"),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await addUser(values);
        if (response.data === 'user created successfully') {
          navigate('/sign-in');
        }else{
          alert('Error creating user')
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }
    },
  });
  
  return (
        <div className='p-3 mx-auto max-w-lg'>
      <h1 className='capitalize text-3xl text-center font-semibold my-7'>sign up</h1>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input
          name='username'
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg '
          id='username'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.username}
        />
        {errors.username && touched.username && <div className='text-red-500 text-xs  -mt-4'>{errors.username}</div>}

        <input
          name='email'
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg '
          id='email'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && touched.email && <div className='text-red-500 text-xs  -mt-4'>{errors.email}</div>}

        <input
          name='password'
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg '
          id='password'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
        />
        {errors.password && touched.password && <div className='text-red-500 text-xs  -mt-4'>{errors.password}</div>}
        
        <button onClick={handleSubmit} disabled={false == isValid || isLoading}   type='submit' className='active:scale-95 transition-all duration-300 flex items-center justify-center bg-slate-700 uppercase hover:opacity-95 disabled:opacity-80 text-white p-3 rounded-lg'>
          {isLoading ? 
          <div role="status">
          <svg aria-hidden="true" className="w-6 h-6 m-0 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
      </div>
          : "sign up"}
        </button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700 '>Sign in</span>{' '}
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
