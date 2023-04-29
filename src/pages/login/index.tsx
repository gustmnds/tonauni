import React, { useContext } from "react";
import { View } from "react-native";
import Logo from "@/assets/tonauni_logo.svg";
import { InputText } from "@/components/InputText";
import { useLogin } from "./hooks/useLogin";
import S from "./styles";
import { Button } from "@/components/Button";
import { AuthContext } from "@/context/authcontext";

export type LoginPageProps = {

};

export const LoginPage: React.FC<LoginPageProps> = () => {
  const {
    login,
    password,
    setLogin,
    setpassword,
    fieldsFilled
  } = useLogin();

  const context = useContext(AuthContext);

  return (
    <View style={S.container}>
      <Logo style={S.logo} />
      <View style={S.inputContainer}>
        <InputText
          value={login}
          onChange={setLogin}
          label="Login"
          placeholder="Login"
        />
        <InputText
          value={password}
          onChange={setpassword}
          label="Password"
          placeholder="Password"
          secure
        />
      </View>
      <Button
        disabled={!fieldsFilled}
        text="Login"
        onClick={() => context?.setToken("ok")}
      />
    </View>
  );
}
