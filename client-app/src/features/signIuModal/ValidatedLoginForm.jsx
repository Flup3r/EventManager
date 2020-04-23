import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Header, Grid, Form, Segment} from 'semantic-ui-react';
import axios from "axios"

const ValidatedLoginForm = () => (
  <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 400 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Sing in
      </Header>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              axios({
                method: 'post',
                url: 'http://localhost:5000/users/authenticate',
                data: values,
                })
                .then(function (response) {
                    //handle success
                    console.log("Succes" ,response);
                })
                .catch(function (response) {
                    //handle error
                    console.log("Wrong email or password", response);
                });
              console.log("Logging in", values);
              setSubmitting(false);
            }, 500);
          }}
          
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Required"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(/(?=.*[0-9])/, "Password must contain a number.")
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
            } = props;
            return (
                
              <form onSubmit={handleSubmit} size="large">
                <Segment stacked>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password && "error"}
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
                <Button type="submit" disabled={isSubmitting} color='teal' fluid size='large'>
                  Login
                </Button>
                </Segment>
              </form>
            );
          }}
        </Formik>
      </Grid.Column>
    </Grid>
);

export default ValidatedLoginForm;
