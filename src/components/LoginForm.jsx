import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Password must be atleast 4 charachters long')
});

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  return (
    <form onSubmit={handleSubmit(data => data)}>
      <label>
        {errors.username && <p style={{ color: 'hsl(0, 58%, 55%)' }}>{errors.username.message}</p>}
        <input name="username" type="text" placeholder="Enter your username" ref={register} />
      </label>
      <label>
        {errors.password && <p style={{ color: 'hsl(0, 58%, 55%)' }}>{errors.password.message}</p>}
        <input name="password" type="password" placeholder="Enter your password" ref={register} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
