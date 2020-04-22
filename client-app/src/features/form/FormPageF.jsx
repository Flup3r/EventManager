/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { render } from 'react-dom'
import Styles from '../../app/layout/Styles'
import { Field } from 'react-final-form'
import Wizard from './Wizard'
import storeF from '../../app/stores/storeF'
import FormStateToRedux from '../../app/stores/formStateToRedux'
import FormStateFromRedux from '../../app/stores/formStateFromRedux'
import { Provider } from 'react-redux'
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  // window.alert(JSON.stringify(values, 0, 2))

}

const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
  <DateTimePicker
    onChange={onChange}
    format="DD MM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

const required = value => (value ? undefined : 'Required')

const FormPageF = () => (
    <Provider store={storeF}>
  <Styles>
    <h1>Let's plan your event</h1>
    <h2>Let's plan your event</h2>

    <Wizard
      initialValues={{}}
      onSubmit={onSubmit}
    >
      <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          }
          if (!values.typeOfEvent) {
            errors.typeOfEvent = 'Required'
          }
          return errors
        }}
      >
        <div>
          <label>Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
          <Error name="email" />
        </div>
        <div>
          <label>Type of Event</label>
          <Field name="typeOfEvent" component="select">
            <option />
            <option value="wedding">Wedding</option>
            <option value="bachelorParty">Bachelor/Bachelorette Party</option>
            <option value="birthday">Birthday</option>
            <option value="weddingAniversary">Wedding Aniversary</option>
            <option value="baptism">Baptism</option>
          </Field>
          <Error name="typeOfEvent" />
        </div>
      </Wizard.Page>
      <Wizard.Page validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          }
          if (!values.amountOfPax) {
            errors.amountOfPax = 'Required'
          }
          return errors
        }}
      >>
        <div>
          <label>Type of Wedding</label>
          <Field
            name="typeOfWedding"
            component="input"
            type="text"
            placeholder="Normal, Theme?"
            validate={required}
          />
          <Error name="typeOfWedding" />
        </div>
        <div>
          <label>How many guests</label>
          <Field name="amountOfPax" component="select">
            <option />
            <option value="0-25">0-25</option>
            <option value="26-50">26-50</option>
            <option value="51-75">51-75</option>
            <option value="76-100">76-100</option>
            <option value="101-125">101-125</option>
            <option value="126-150">126-150</option>
            <option value="151-175">151-175</option>
            <option value="176-200">176-200</option>
          </Field>
          <Error name="amountOfPax" />
        </div>
        
      </Wizard.Page>
      <Wizard.Page>
      <div>
          <label>Indoors or Outdoors?</label>
          <div>
            <label>
              <Field
                name="inOrOut"
                component="input"
                type="radio"
                value="indoors"
              />{' '}
              Indoors
            </label>
            <label>
              <Field name="inOrOut" component="input" type="radio" value="outdoors" />{' '}
              Outdoors
            </label>
          </div>
        </div>
      </Wizard.Page>
      <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.details) {
            errors.details = 'Required'
          } 
          return errors
        }}
      >
        {/* <div>
          <label>Employed?</label>
          <Field name="employed" component="input" type="checkbox" />
        </div> */}
        <div>
          <h3>Details of wedding (you can choose more than one)</h3>
          </div>
          <div>
          <label>Details</label>
          <Field name="details" component="select" multiple>
            <option value="tent">Tent</option>
            <option value="decorations">Decorations</option>
            <option value="flowers">Flowers</option>
            <option value="tables">Tables</option>
            <option value="catering">Catering</option>
            <option value="orchestra">Orchestra</option>
            <option value="dj">DJ</option>
            <option value="service">Service</option>
          </Field>
          <Error name="details" />
        </div>
      </Wizard.Page>
      <Wizard.Page>
      <div> 
        What is the closest bigger city to your planned location?
      </div>
        <div>
          <label>Location</label>
          <Field
            name="location"
            component="input"
            type="text"
            placeholder="Bigger City"
            validate={required}
          />
          <Error name="biggerCity" />
        </div>
        <div>
          <label>Date of your event</label>
          <Field
            name="date"
            component="input"
            type="text"
            placeholder="DD-MM-YYYY"
            validate={required}
          />
          <Error name="date" />
        </div>
      </Wizard.Page>
      <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.notes) {
            errors.notes = 'Required'
          }
          return errors
        }}
      >
        <div>
          <label>Additional Notes</label>
          <Field name="notes" component="textarea" placeholder="Notes" />
          <Error name="notes" />
        </div>
      </Wizard.Page>
    </Wizard>
  </Styles>
  </Provider>
)

render(<FormPageF />, document.getElementById('root'))

export default FormPageF;
