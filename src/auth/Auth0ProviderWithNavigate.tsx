import React from "react";
import PropTypes from "prop-types";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { useCreateMyUser } from "@/api/MyUserApi";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

function Auth0ProviderWithNavigate({ children }: Props) {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIETNT_ID;
  const redirectUrl = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUrl || !audience) {
    throw new Error("Unable to initialize auth");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("User", user);
    navigate("/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUrl,
        audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

Auth0ProviderWithNavigate.propTypes = {};

export default Auth0ProviderWithNavigate;
