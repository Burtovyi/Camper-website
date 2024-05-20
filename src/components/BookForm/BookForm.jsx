import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import css from "./BookForm.module.css";
import DatePicker from "../DatePicker/DatePicker";

export default function BookForm() {
  return (
    <>
      <Formik
        onSubmit={() => {
          window.location.reload();
        }}
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        validationSchema={Yup.object({
          name: Yup.string().min(2, "Your name is too short").required("Name is required"),
          email: Yup.string().email("Put your real email pls!").required("Email is required"),
          bookingDate: Yup.date().required("Booking date is required"),
          comment: Yup.string(),
        })}
      >
        <Form className={css.bookFormContainer}>
          <div>
            <h3 className={css.bookFormTitle}>Book your campervan now</h3>
            <p className={css.bookFormText}>
              Stay connected! We are always ready to help you.
            </p>
          </div>

          <div className={css.fieldContainer}>
            <label className={css.label} htmlFor="name">
              Name
              <Field
                className={css.field}
                name="name"
                type="text"
                placeholder="Name"
              />
            </label>
            <ErrorMessage name="name" component="div" className={css.error} />

            <label className={css.label} htmlFor="email">
              Email
              <Field
                className={css.field}
                name="email"
                type="email"
                placeholder="Email"
              />
            </label>
            <ErrorMessage name="email" component="div" className={css.error} />

            <label className={css.label} htmlFor="bookingDate">
              Booking Date
              <Field name="bookingDate">
                {({ field, form }) => (
                  <DatePicker
                    {...field}
                    selected={field.value}
                    onChange={date => form.setFieldValue(field.name, date)}
                    className={css.field}
                  />
                )}
              </Field>
            </label>
            <ErrorMessage name="bookingDate" component="div" className={css.error} />

            <label className={css.label} htmlFor="comment">
              Comment
              <Field
                className={css.fieldTextArea}
                as="textarea"
                name="comment"
                type="text"
                placeholder="Comment"
              />
            </label>
            <ErrorMessage name="comment" component="div" className={css.error} />
          </div>

          <button className={css.sendButton} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
}