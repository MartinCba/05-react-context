import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";


const FooterContext = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  return (
    <div>
      <footer className={theme}>
        <h4>{texts.footerTitle}</h4>
      </footer>
    </div>
  );
};

export default FooterContext;
