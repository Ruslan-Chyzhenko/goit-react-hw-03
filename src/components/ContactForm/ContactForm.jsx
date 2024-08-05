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
        Name
        <Field className={css.field} type="text" name="username" />
        Number
        <Field type="text" name="number" />
        <button type="submit">Add contact</button>
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
