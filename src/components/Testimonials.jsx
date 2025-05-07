// src/components/Testimonials.jsx
import React from 'react';
import "../css/testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: 'Sarah J.',
      review: 'I love these shoes! Comfortable and stylish.',
      rating: 5,
    },
    {
      name: 'John D.',
      review: 'Great quality and fast shipping! Highly recommend.',
      rating: 4,
    },
    {
      name: 'Emma P.',
      review: 'Customer service was fantastic. Will definitely buy again!',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Are Saying</h2>
      <div className="testimonial-container">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            <p className="review-text">“{review.review}”</p>
            <div className="customer-info">
              <span className="customer-name">{review.name}</span>
              <span className="customer-rating">
                {'⭐'.repeat(review.rating)} {/* Stars for rating */}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
