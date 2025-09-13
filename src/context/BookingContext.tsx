import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import type { ReactNode, Ref } from 'react';

const BOOKSY_WIDGET_SCRIPT_SRC = 'https://booksy.com/widget/code.js?id=995400&country=us&lang=en-US';

interface BookingContextType {
  isLoaded: boolean;
  setLoaded: (loaded: boolean) => void;
  openBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children?: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const booksyWidgetRef: Ref<HTMLDivElement> = useRef(null);

  const setLoaded = useCallback((loaded: boolean) => {
    setIsLoaded(loaded);
  }, []);

  const openBooking = useCallback(() => {
    console.log('Opening booking widget..');
    if (!isLoaded) return;
    const bookNowButton = document.querySelector('.booksy-widget-button');
    if (bookNowButton) {
      bookNowButton.dispatchEvent(new MouseEvent('click'));
    }
  }, [isLoaded]);

  useEffect(() => {
    if (!booksyWidgetRef.current) return;
    if (booksyWidgetRef.current.children.length > 0) return;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = BOOKSY_WIDGET_SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      document.querySelector('.booksy-widget-container')?.setAttribute('style', 'display: none;');
      setLoaded(true);
      console.log('Booksy widget loaded');
    }
    booksyWidgetRef.current.appendChild(script);

    return () => {
      const booksyObj: any = (window as any).booksy;
      if (!booksyObj) return;
      delete (window as any)['booksy'];
    };
  }, []);

  return (
    <BookingContext.Provider value={{ isLoaded, setLoaded, openBooking }}>
      {children}
      <div ref={booksyWidgetRef}></div>
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within a BookingProvider');
  return ctx;
};
