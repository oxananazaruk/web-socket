import { Formik } from "formik";
import { ErrorMessage, FormGroup, Fild, Form } from "./SinginChatForm.styled";
import * as Yup from "yup";

const nameSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!"),
});

const SinginChatForm = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={nameSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          onSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormGroup>
            Enter your name
            <Fild name="name" />
            <ErrorMessage name="name" component="span" />
          </FormGroup>

          <button type="submit">Connect</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SinginChatForm;
