import React from "react";
import { useForm } from "react-hook-form";


function Form() {
  const {register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);
  
  return (
    <>
      <p className="title">Registration Form</p>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register('name')} />
        <label>Email</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red" }}>
        *Email* is mandatory </span>}
        <label>password</label>
        <input type="password" {...register("password")} />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}
export default Form;