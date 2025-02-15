import classes from "./CodeBlock.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import PropTypes from "prop-types";

const CodeBlock = ({ language, code }) => {
  return (
    <div className={classes.code}>
      <div className={`flex-center ${classes.code__dots}`}>
        <span className={classes.code__dot}></span>
        <span className={classes.code__dot}></span>
        <span className={classes.code__dot}></span>
      </div>
      <SyntaxHighlighter
        language={language}
        style={a11yLight}
        customStyle={{
          backgroundColor: "rgba(var(--color-primary-rgb), 0.03)",
          color: "skyblue",
          padding: "2rem 2rem 4rem",
          fontSize: "1.4rem",
        }}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;

CodeBlock.propTypes = {
  language: PropTypes.string,
  code: PropTypes.string,
};
