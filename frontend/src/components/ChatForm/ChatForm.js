import { Formik } from "formik";
import { ErrorMessage, FormGroup, Fild, Form } from "./ChatForm.styled";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  message: Yup.string().min(3, "Too Short!"),
});

const ChatForm = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{
          message: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormGroup>
            Enter message
            <Fild name="message" />
            <ErrorMessage name="message" component="span" />
          </FormGroup>

          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ChatForm;
