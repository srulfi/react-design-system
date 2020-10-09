import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState, useCallback } from "react";
import useIsClient from "../useIsClient";

var useWindowSize = function useWindowSize() {
  var isClient = useIsClient();
  var getSize = useCallback(function () {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }, [isClient]);

  var _useState = useState(getSize),
      _useState2 = _slicedToArray(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  useEffect(function () {
    var handleResize = function handleResize() {
      if (isClient) {
        setWindowSize(getSize());
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, [isClient, getSize]);
  return windowSize;
};

export default useWindowSize;