import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";

export default function ContactForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      text: e.target.elements.text.value,
    });
    e.target.reset();
  };

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.fieldContainer}>
          <label htmlFor="username" className={css.label}>
            Name
          </label>
          <Field className={css.field} type="text" name="username" />
        </div>
        <div className={css.fieldContainer}>
          <label htmlFor="number" className={css.label}>
            Number
          </label>
          <Field className={css.field} type="text" name="number" />
        </div>
        <div className={css.buttonContainer}>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );

  // return (
  //   <form className={css.form} onSubmit={handleSubmit}>
  //     <input className={css.field} type="text" name="text" />
  //     <button type="submit">Add task</button>
  //   </form>
  // );
}
