import css from "./Contact.module.css";
import { HiUser } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <p className={css.text}>
        <HiUser /> {name} <BsFillTelephoneFill />
        {number}
      </p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
