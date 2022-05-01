import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import TextError from "./TextError";

type FORM = {
  name: string;
  email: string;
  channel: string;
  comments: string;
  address: string;
  social: {
    facebook: string;
    twiiter: string;
  };
  phoneNumbers: string[];
};
const initialValues: FORM = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twiiter: "",
  },
  phoneNumbers: ['',''],
};
const onSubmit = (values: FORM, action: any) => {
  console.log(values, action);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!!!"),
  email: Yup.string().email("Invalid email format!!!").required("Required!!!"),
  channel: Yup.string().required("Required!!!"),
});

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage component={TextError} name="name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errorMsh) => <div className="error">{errorMsh}</div>}
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props: any) => {
              const { field, form, meta } = props;
              // console.log(props);
              return (
                <div>
                  <Input type="text" id="address" {...field} />
                  {meta.touched && meta.errro && <div>{meta.error}</div>}
                </div>
              );
            }}
          </Field>
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook profile</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>
        <div className="form-control">
          <label htmlFor="twiiter">Twitter profile</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh">Primary phone number</label>
          <Field type="text" id="primary" name="phoneNumbers[0]" />
        </div>
        <div className="form-control">
          <label htmlFor="secondaryPh">Secondary phone number</label>
          <Field type="text" id="secondary" name="phoneNumbers[1]" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
