import React from "react";

const styles = {
  // color: "#0f0;",
  // react-dom.development.js:86 Warning: Style property values shouldn't contain a semicolon. Try "color: #0f0" instead.
  color: "#0f0",
};

export default function Test(props: { title: any; }) {
  const {title} = props;
  console.log(`props =`, props)
  return (
    <>
      {/* <h1 style={styles.color}>{title}</h1> */}
      <h1 style={{color: styles.color}}>{title}</h1>
    </>
  )
}

// Type 'string' has no properties in common with type 'Properties<string | number, string & {}>'.ts(2559)
