import React from "react";

export function useLogin() {
  const [login, setLogin] = React.useState("");
  const [password, setpassword] = React.useState("");
  const fieldsFilled = !!login && !!password;

  return {
    login,
    password,
    setLogin,
    setpassword,
    fieldsFilled
  };
}
