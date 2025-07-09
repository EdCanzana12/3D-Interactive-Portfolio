import { createContext, useContext, useState, useEffect } from 'react';

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingComponents, setLoadingComponents] = useState(new Set());

  const startLoading = (componentName) => {
    setLoadingComponents(prev => new Set([...prev, componentName]));
    setIsLoading(true);
  };

  const stopLoading = (componentName) => {
    setLoadingComponents(prev => {
      const newSet = new Set(prev);
      newSet.delete(componentName);
      return newSet;
    });
  };

  useEffect(() => {
    setIsLoading(loadingComponents.size > 0);
  }, [loadingComponents]);

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      startLoading, 
      stopLoading,
      loadingComponents 
    }}>
      {children}
    </LoadingContext.Provider>
  );
};