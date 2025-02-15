import { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
import PropTypes from "prop-types";
import dataEn from "../data-en";
import dataPl from "../data-pl";

const translations = {
  en: dataEn,
  pl: dataPl,
};

export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem("language") || "en";
  const [language, setLanguage] = useState(storedLanguage);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "pl" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;

    const metaDescription = document.querySelector('meta[name="description"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        translations[language].meta.description ||
          translations["en"].meta.description
      );
    }

    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        translations[language].meta.ogDescription ||
          translations["en"].meta.ogDescription
      );
    }
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
