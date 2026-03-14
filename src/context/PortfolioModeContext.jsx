import React, { createContext, useContext, useState, useMemo } from "react";

export const MODES = {
  NORMAL: "normal",
  CYBER: "cyber"
};

const PortfolioModeContext = createContext(null);

export function PortfolioModeProvider({ children }) {
  const [mode, setMode] = useState(MODES.NORMAL);

  const value = useMemo(
    () => ({
      mode,
      isNormal: mode === MODES.NORMAL,
      isCyber: mode === MODES.CYBER,
      toggleMode: () =>
        setMode((prev) => (prev === MODES.NORMAL ? MODES.CYBER : MODES.NORMAL)),
      setMode
    }),
    [mode]
  );

  return (
    <PortfolioModeContext.Provider value={value}>
      {children}
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolioMode() {
  const ctx = useContext(PortfolioModeContext);
  if (!ctx) {
    throw new Error("usePortfolioMode must be used within PortfolioModeProvider");
  }
  return ctx;
}

