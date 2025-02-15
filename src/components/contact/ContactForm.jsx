import { useContext } from "react";
import { LanguageContext } from "../../store/LanguageContext";
import classes from "./ContactForm.module.scss";
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { validateEmail, validateText } from "../../validate";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const { language, translations } = useContext(LanguageContext);
  const text = translations[language].formData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "name") {
      setErrors({
        ...errors,
        name: validateText(
          value,
          3,
          text.validateTextEmpty,
          text.validateTextNumber
        ),
      });
    }
    if (name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(
          value,
          text.validateTextEmpty,
          text.validateEmailText
        ),
      });
    }
    if (name === "message") {
      setErrors({
        ...errors,
        message: validateText(
          value,
          15,
          text.validateTextEmpty,
          text.validateTextNumber
        ),
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setErrors({
        ...errors,
        name: validateText(
          value,
          3,
          text.validateTextEmpty,
          text.validateTextNumber
        ),
      });
    }
    if (name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(
          value,
          text.validateTextEmpty,
          text.validateEmailText
        ),
      });
    }
    if (name === "message") {
      setErrors({
        ...errors,
        message: validateText(
          value,
          15,
          text.validateTextEmpty,
          text.validateTextNumber
        ),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errors.name && !errors.email && !errors.message) {
      setSending(true);

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      try {
        const response = await fetch(
          "https://lubeckawebsites.pl/send_mail.php",
          {
            method: "POST",
            body: formDataToSend,
          }
        );

        const result = await response.json();

        if (response.ok) {
          const msg =
            language === "en" ? result.message : "Twój email został wysłany!";
          toast.success(msg);
          setFormData({ name: "", email: "", message: "" });
        } else {
          const msg =
            language === "en"
              ? `Error sending message: ${result.message}`
              : "Nie udało się wysłać wiadomości. Spróbuj później.";
          toast.error(msg);
        }
      } catch (error) {
        console.log("Sending email error: ", error);
        const msg =
          language === "en"
            ? "Network error. Please check your connection."
            : "Nie udało się wysłać wiadomości. Sprawdź połączenie z siecią.";
        toast.error(msg);
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder={text.namePlaceholder}
        name="name"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {errors.name && <p className={classes.error}>{errors.name}</p>}
      <input
        type="email"
        placeholder={text.emailPlaceholder}
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {errors.email && <p className={classes.error}>{errors.email}</p>}
      <textarea
        name="message"
        rows={7}
        placeholder={text.messagePlaceholder}
        value={formData.message}
        onChange={handleChange}
        onBlur={handleBlur}
      ></textarea>
      {errors.message && <p className={classes.error}>{errors.message}</p>}
      <button
        className={`btn flex-center ${classes.form__btn}`}
        disabled={sending}
      >
        <div className={classes.form__icon}>
          <BsFillSendFill />
        </div>
        <span>{sending ? text.buttonSending : text.button}</span>
      </button>
    </form>
  );
};

export default ContactForm;
