import { useEffect, useRef, type Ref } from 'react';
import { useBooking } from '../context/BookingContext';

const BOOKSY_WIDGET_SCRIPT_SRC = 'https://booksy.com/widget/code.js?id=995400&country=us&lang=en-US';

export const BooksyModal = () => {
  const { setLoaded } = useBooking();
  const booksyWidgetRef: Ref<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (!booksyWidgetRef.current) return;
    if (booksyWidgetRef.current.children.length > 0) return;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = BOOKSY_WIDGET_SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      setLoaded(true);
      document.querySelector('.booksy-widget-container')?.setAttribute('style', 'display: none;');
    }
    booksyWidgetRef.current.appendChild(script);

    return () => {
      const booksyObj: any = (window as any).booksy;
      if (!booksyObj) return;
      delete (window as any)['booksy'];
    };
  }, [setLoaded]);

  return (
    <div ref={booksyWidgetRef}></div>
  );
};
