import React, { createContext, useState } from 'react';

type LaunchPanelContextProps = {active: boolean; setActive: (active: boolean) => void} | undefined;
type LaunchPanelProviderProps = {children: React.ReactNode};

export const LaunchPanelContext = createContext<LaunchPanelContextProps>(undefined)

export const LaunchPanelProvider = ({children}: LaunchPanelProviderProps) => {
  const [active, setActive] = useState(false);
  return (
    <LaunchPanelContext.Provider value={{active, setActive}}>
      {children}
    </LaunchPanelContext.Provider>
  );
};

export const useLaunchPanel = () => {
  const context = React.useContext(LaunchPanelContext)
  if (context === undefined) {
    throw new Error('useLaunchPanel must be used within a LaunchPanelProvider')
  }
  return context
}