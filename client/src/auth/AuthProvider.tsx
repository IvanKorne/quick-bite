import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import React from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  if (!domain || !clientID || !redirectUri) {
    throw new Error("Unable to authorize user");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("user", user);
  };
  return (
    <Auth0Provider
      clientId={clientID}
      domain={domain}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
