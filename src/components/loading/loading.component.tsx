import React, { useEffect, useRef } from "react";

import "./loading.scss";

interface LoadingProps {
  label: string;
}

const Loading: React.FC<LoadingProps> = ({ label }) => {
  const labelRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    let labelR = labelRef.current;

    const timer = setTimeout(() => {
      if (labelR) {
        labelR.textContent = "Sorry this is taking so long...";
      }
    }, 2500);
    const timer2 = setTimeout(() => {
      if (labelR) {
        labelR.textContent = "Shouldn't be too long more...";
      }
    }, 5000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="loader" data-testid="loader">
      <div className="loader__spinner"></div>
      <p ref={labelRef} className="loader__label">
        {label}
      </p>
    </div>
  );
};

export default Loading;
