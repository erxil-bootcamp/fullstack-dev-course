import { Button } from "@/atoms";
import { LabeledInput } from "@/molecules";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (params) => {
      console.log(params);
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit();
        return false;
      }}
      className="w-[300px] flex flex-col gap-3 p-7 border rounded-md bg-white shadow-md"
    >
      <h2 className="font-bold text-xl">Login</h2>
      <LabeledInput
        error={formik.touched["email"] && formik.errors["email"]}
        name="email"
        label="Email"
        onChange={formik.handleChange}
      />
      <LabeledInput
        error={formik.touched["password"] && formik.errors["password"]}
        name="password"
        onChange={formik.handleChange}
        label="Password"
        type="password"
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
