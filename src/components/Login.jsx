import { useForm } from "react-hook-form";
import { login } from "../services/api";
import { useHistory } from "react-router";


const Login = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (creds) => {
    const res = await login(creds);

    if (res.token) {
      localStorage.setItem("auth.token", JSON.stringify(res.token));
      history.replace("/address");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Email"></div>
     <div>
     <label>
        Email:
        <input {...register("email")} />
      </label>
     </div>

    <div>
    <label>
        Password:
        <input {...register("password")} />
      </label>
      </div>
      <div><input type="submit" value="submit" /></div>
    </form>



  );
};
export default Login;