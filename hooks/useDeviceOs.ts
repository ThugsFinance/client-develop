import { useState, useEffect } from "react";

const detectDevice = () => {
  let device = "pc";
  if (navigator.userAgent.match(/Android/i)) {
    device = "android";
  } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    device = "ios";
  }
  return device;
};

function useDeviceOs() {
  const [deviceOs, setDeviceOs] = useState("pc");

  useEffect(() => {
    setDeviceOs(detectDevice());
  }, []);

  return deviceOs;
}

export default useDeviceOs;
