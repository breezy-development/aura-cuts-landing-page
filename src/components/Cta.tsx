import { useBooking } from "../context/BookingContext";

export const Cta = () => {
  const { openBooking } = useBooking();

  return (
    <button
      onClick={openBooking}
    >
      Book Now
    </button>
  );
}