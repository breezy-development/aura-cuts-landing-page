import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import { LandingPage } from './pages/Landing';
import { OurStoryPage } from './pages/OurStory';
import { BookingProvider } from './context/BookingContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/story",
    element: <OurStoryPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookingProvider>
      <RouterProvider router={router}/>
    </BookingProvider>
  </StrictMode>,
)
