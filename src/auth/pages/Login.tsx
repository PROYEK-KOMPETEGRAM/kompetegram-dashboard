import { useEffect } from "react"
import { Button } from "../components/Button/Button";
import Logo from "../../commons/assets/logo.png";
import { Error } from "../components/Error/Error";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { TextInput } from "../components/TextInput/TextInput";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "@/commons/context/provider";
import { useMutation, useQuery } from "@tanstack/react-query";
import { loginUser } from "../api/auth";
import { setAccessToken, setRefreshToken } from "@/commons/helpers/utils";
import { getCurrentUser } from "@/commons/api/common";

interface ILoginInput {
  username: string 
  password: string
}

const schema = yup.object({
  username: yup.string().required("Username wajib diisi"),
  password: yup.string().required("Kata sandi wajib diisi")
}).required();

export const LoginPage = () => {
  const methods = useForm<ILoginInput>({
    resolver: yupResolver(schema)
  });

  const {register, handleSubmit, formState:{ errors }} = methods;
  const navigate = useNavigate();
  const stateContext = useStateContext();

  const query = useQuery(["user"], getCurrentUser, {
    enabled: false,
    select: (data: any) => data.data,
    retry: 1,
    onSuccess: (data: any) => {
      stateContext.dispatch({
        type: "SET_USER",
        payload: data,
      });
      navigate('/dashboard/members')
    }
  })

  const { mutate } = useMutation((data: ILoginInput) => loginUser(data), {
    onSuccess(response) {
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      query.refetch();
    },
    onError(error: any) {
      console.log('Error : ', error.message);
    }
  })

  const onSubmit = (values: ILoginInput) => {
    mutate(values);
  }

  useEffect(() => {
    document.body.classList.add('bg-gray-800');
  },[])

  return (
    <div className="flex justify-center items-center h-screen w-100">
      <div className="shadow-lg rounded-2xl bg-white sm:w-3/4 
        md:w-1/3 text-center mx-4">
        <div className="p-7 sm:p-10">
          <div className="mt-2 mb-2">
            <div className="flex justify-center">
              <img className="w-3/4 sm:w-2/3" src={Logo} />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-6">
              <TextInput
                type="text"
                placeholder="Username"
                showError={errors.username}
                {...register('username')}
              />
              {errors.username && (
                <Error title={errors.username?.message}/>
              )}
              <TextInput
                type="password"
                placeholder="Kata Sandi"
                showError={errors.password}
                {...register('password')}
              />
              {errors.password && (
                <Error title={errors.password?.message}/>
              )}
            </div>
            <Button title="MASUK AKUN"/>
          </form>
          <hr className="my-6 border-gray-300" />
        </div>
      </div>
    </div>
  )
}