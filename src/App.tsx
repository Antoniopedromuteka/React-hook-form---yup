import React from 'react';
import {useForm} from "react-hook-form"
import "./App.css" 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
 
 

const schema = yup.object({
  name: yup.string().required("O nome é obrigatorio"),
  email: yup.string().email("digite um email valido").required("O email é obrigatorio"),
  password: yup.string().min(6, "a senha deve ter pelo menos 6 digitos").required("O password é obrigatorio"),
  passwordconfirm: yup.string().required("O confirmar o password é obrigatorio").oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  
}).required();


function App() {

  const  {register, handleSubmit, watch, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  });



  function singUp(userData:any) {
    console.log(userData);
  }

  console.log(errors);


  return (

    <form onSubmit={handleSubmit(singUp)}>
      <img src="../" alt="form"/>

      <label htmlFor="">
        Nome
        <input type="text" {...register('name', {required: true})}/>
        {errors.name && <span>{errors.name?.message as any}</span>}
      </label>

      <label htmlFor="">
        Email
        <input type="text" {...register('email')} />
        {errors.email && <span>{errors.email?.message as any}</span>}

      </label>  <label htmlFor="">
        Senha   
        <input type="text" {...register('password')} />
        {errors.password && <span>{errors.password?.message as any}</span>}
      </label>

      <label htmlFor="">
        Confirmar senha
        <input type="text" {...register('passwordconfirm')} />
        {errors.passwordconfirm && <span>{errors.passwordconfirm?.message as any}</span>}
      </label>

      <button type='submit'>Cadastrar-se</button>
    </form>
  );
}

export default App;
