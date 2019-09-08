import { useEffect } from "react";
import { navigate } from "gatsby";

export default () => {
  useEffect(() => {
    navigate("/folders");
  }, []);

  return null;
};
