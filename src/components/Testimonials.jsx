import StarRoundedIcon from '@mui/icons-material/StarRounded';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';
import person4 from '../assets/person4.png';

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      img: person2,
      author: 'Kevin',
      content: 'Love the place! Their desserts are to die for!',
    },
    {
      rating: 4,
      img: person1,
      author: 'Jacey',
      content:
        'A decent place to hang out. Only downside is that the place is a bit small.',
    },
    {
      rating: 5,
      img: person4,
      author: 'Chris',
      content: 'The food is amazing! I especially love their bruschetta.',
    },
    {
      rating: 5,
      img: person3,
      author: 'AJ',
      content:
        'Definitely will come back again! The food is amazing and the place is very cozy.',
    },
  ];

  const createRating = (rating) => {
    let ratingArray = [];
    for (let i = 0; i < rating; i++) {
      ratingArray.push(
        <StarRoundedIcon style={{ color: 'rgb(52 180 102)' }} />,
      );
    }
    return ratingArray;
  };

  return (
    <section className="testimonials">
      <section className="testimonials-container">
        <h1 className="testimonials-title">Testimonials</h1>
        <article className="testimonials-articles">
          {testimonials.map((testimonial, index) => {
            return (
              <article key={index} className="rating-post">
                <h2>{createRating(testimonial.rating)}</h2>
                <h3 className="rating-author">
                  <img
                    src={testimonial.img}
                    alt="Rating"
                    className="rating-img"
                  />
                  {testimonial.author}
                </h3>
                <p className="rating-content">{testimonial.content}</p>
              </article>
            );
          })}
        </article>
      </section>
    </section>
  );
}
