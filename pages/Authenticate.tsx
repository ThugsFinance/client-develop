import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "state";
import { isWindow } from "utils";
import useEagerConnect from "hooks/useEagerConnect";

// Actions
import { login } from "state/user/actions";

// Services

// Constants

const blockedIPs = ["VN"];

const Authenticate: React.FC = ({ children }) => {
  useEagerConnect();

  const [isValidIP, setIsValidIP] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   const token = window.localStorage.getItem(tokenKey)
  //   if (token) {
  //     get({
  //       path: '/api/auth'
  //     }).then(user => dispatch(login(user)))
  //   }

  //   // Check IP blocked
  //   if (isWindow && Boolean(Number(process.env.NEXT_PUBLIC_IP_CHECK))) {
  //     get({
  //       path: 'https://extreme-ip-lookup.com/json/'
  //     }).then(resp => {
  //       if (resp.countryCode && blockedIPs.includes(resp.countryCode)) {
  //         setIsValidIP(false)
  //       }
  //     })
  //   }
  // }, [])

  if (!isValidIP) {
    return <code>Something went wrong</code>;
  }
  return <>{children}</>;
};

export default Authenticate;
