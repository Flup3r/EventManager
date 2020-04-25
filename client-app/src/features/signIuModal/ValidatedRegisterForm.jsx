import React from 'react'
import { Button, Header, Grid, Segment} from 'semantic-ui-react'
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios"

const ValidatedRegisterForm = () => (
    <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 400 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Sing up
        </Header>
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                axios({
                  method: 'post',
                  url: 'http://localhost:5000/users/register',
                  data: values,
                  })
                  .then(function (response) {
                      //handle success
                      console.log("Succes" ,response);
                      window.location.reload();
                  })
                  .catch(function (response) {
                      //handle error
                      console.log("Data is taken", response);
                  });
                console.log("Register", values);
                setSubmitting(false);
              }, 500);
            }}
            
            validationSchema={Yup.object().shape({
              username: Yup.string()
                .required("No username provided")
                .min(4, "username is too short - should be 4 chars minimum."),
              email: Yup.string()
                .email()
                .required("Required"),
              password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number."),
              confirmPassword: Yup.string()
                .required("No  correct password provided.")
                .oneOf([Yup.ref('password')], 'Password does not match')
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
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.username && touched.username && "error"}
                  />
                  {errors.username && touched.username && (
                    <div className="input-feedback">{errors.username}</div>
                  )}
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
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"                    
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.confirmPassword && touched.confirmPassword && "error"}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="input-feedback">{errors.confirmPassword}</div>
                  )}
                  <Button type="submit" disabled={isSubmitting} color='teal' fluid size='large'>
                    Register
                  </Button>
                  </Segment>
                </form>
              );
            }}
          </Formik>
        </Grid.Column>
      </Grid>
  );
  
  export default ValidatedRegisterForm;
  

/*
const RegisterDescription = () => {
    return (
        <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 400 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Sing up
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input 
                            fluid icon='user'
                            iconPosition='left' 
                            placeholder='Username' 
                        />
                        <Form.Input 
                            fluid icon='mail'
                            iconPosition='left' 
                            placeholder='E-mail address' 
                        />
                        <Form.Input
                            fluid icon='lock'                             
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                    <Button color='teal' fluid size='large'>
                        Register
                    </Button>
                    </Segment>
                </Form>            
            </Grid.Column>
        </Grid>
        )
    }

export default RegisterDescription*/
