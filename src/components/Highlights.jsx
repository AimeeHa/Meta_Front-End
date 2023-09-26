import lemon from '../assets/lemon-dessert.jpg';
import bruschetta from '../assets/bruschetta.jpg';
import salad from '../assets/greek-salad.jpg';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

export default function Highlights() {
  const highlightItems = [
    {
      name: 'Greek Salad',
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: '$12.99',
      img: salad,
    },
    {
      name: 'Bruschetta',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      price: '$5.99',
      img: bruschetta,
    },
    {
      name: 'Lemon Dessert',
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: '$5.00',
      img: lemon,
    },
  ];

  return (
    <section className="highlights">
      <section className="highlights-container">
        <section className="highlights-header">
          <h1>Specials</h1>
          <button className="yellow-button">Online Menu</button>
        </section>
        <article className="highlights-articles">
          {highlightItems.map((item, i) => {
            return (
              <article key={i}>
                <img src={item.img} alt={item.name} />
                <h2 className="dish-title">
                  <span className="dish-name">{item.name}</span>
                  <span className="dish-price">{item.price}</span>
                </h2>
                <p className="dish-description">{item.description}</p>
                <button className="delivery-button">
                  Order a delivery <DeliveryDiningIcon />
                </button>
              </article>
            );
          })}
        </article>
      </section>
    </section>
  );
}
