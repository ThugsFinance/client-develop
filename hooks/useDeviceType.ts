import { useState, useEffect } from "react";

function useDeviceType() {
  const [deviceType, setDeviceType] = useState("desktop");
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    function updateSize() {
      let type = "desktop";
      if (window.innerWidth >= 1440) {
        type = "desktop";
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
        type = "laptop";
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        type = "tablet";
      } else if (window.innerWidth < 768) {
        type = "mobile";
      }
      setDeviceType(type);
      setDeviceWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return [deviceType, deviceWidth];
}

export default useDeviceType;
