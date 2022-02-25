import reportWebVitals from './reportWebVitals';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Questions from './Questions';
import { LoadingContext } from './contexts';
import { ReactNode } from "react";
import { LoadingValue } from './types';

interface WrapperProps {
  children: ReactNode
};

const ContextWrapper = ({ children } : WrapperProps) => {

  const [loading, setLoading] = useState(false);

  const loadingValue : LoadingValue = {
    value: loading,
    setValue: (value: boolean) => setLoading(value)
  }

  return (
    <LoadingContext.Provider value={loadingValue} >
      {children}
    </LoadingContext.Provider>
  )
}

ReactDOM.render(
  <ContextWrapper>
    <Questions />
  </ContextWrapper>,
  document.getElementById("root")
);
reportWebVitals();
