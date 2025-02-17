import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../../store/LanguageContext";
import classes from "./CookieBanner.module.scss";

const CookieBanner = () => {
  const { language } = useContext(LanguageContext);
  const [cookieEaten, setCookieEaten] = useState(false);

  useEffect(() => {
    const storedCookie = localStorage.getItem("cookie");
    if (storedCookie) {
      setCookieEaten(true);
    }
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem("cookie", "true");
    setCookieEaten(true);
  };

  if (cookieEaten) {
    return null;
  }
  return (
    <div className={classes["cookie-box"]}>
      <p>
        {language === "en"
          ? "The website uses only necessary cookies!"
          : "Strona korzysta tylko z niezbędnych ciasteczek!"}
      </p>
      <button
        className={`btn ${classes["cookie-box__btn"]}`}
        onClick={handleCookieAccept}
      >
        {language === "en" ? "I agree" : "Akceptuj"} 🍪
      </button>
    </div>
  );
};

export default CookieBanner;
