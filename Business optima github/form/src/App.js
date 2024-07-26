import { useForm } from "react-hook-form"
import './App.css'
import { ErrorMessage } from "@hookform/error-message"
import axios from 'axios';



export default function App() {




  const {
    register,
    watch,

    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all"})


  const onSubmit = (data) => {

    if(data.password === data.confirmPassword){

      console.log(data);

      axios.post('http://localhost:5000/',data)
      .then(res => console.log('registered successfully'))
      .catch(err => console.log(err))
    }
   
}
  
 return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label> Full Name</label>
      <input  {...register("fullName" , {required:'This is required'})} />
      <ErrorMessage
        errors={errors}
        name="fullName"
        render={({ message }) => <p>{message}</p>}
      />


      {/* include validation with required or other standard HTML validation rules */}
      <label>Email Address</label>
      <input {...register("email", { required: "This is required.", pattern :{value :/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ , message : 'Enter a valid email address' }})} />
      {errors.email && <p>{errors.email.message}</p>}

      <label>Password</label>
      <input {...register("password", { required:"This is required" ,minLength:{value : 6 , message:'Minimum length should be 6'} })} />
      {errors.password && <p>{errors.password.message}</p>}

      <label>Confirm Password</label>
      <input {...register("confirmPassword", { required: "This is required", minLength:{value : 6 , message:'Minimum length should be 6'} ,validate: (value) =>
              value === watch('password') || 'Passwords do not match'})} />
      {/* errors will return when field validation fails  */}
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      
      <input type="submit"  className="submit"/>

    </form>
  )
}