import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test(
    <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                     <option>Birthday</option>
                     <option>Anniversary</option>
                     <option>Engagement</option>
                  </select>
)
