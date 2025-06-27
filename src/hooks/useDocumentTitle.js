import { useEffect } from 'react';

export const useDocumentTitle = (title) => {
  useEffect(() => {
    const baseTitle = 'Banco Marfil';
    const fullTitle = title ? `${title} - ${baseTitle}` : baseTitle;
    
    document.title = fullTitle;
    
    // Cleanup: restaurar título base cuando el componente se desmonte
    return () => {
      document.title = baseTitle;
    };
  }, [title]);
};