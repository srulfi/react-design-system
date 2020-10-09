import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from "react";

var useIsClient = function useIsClient() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isClient = _useState2[0],
      setClient = _useState2[1];

  useEffect(function () {
    if (typeof window !== "undefined" && window.document && window.document.createElement) {
      setClient(true);
    }
  }, []);
  return isClient;
};

export default useIsClient;