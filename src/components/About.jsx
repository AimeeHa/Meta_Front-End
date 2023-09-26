import founders from '../assets/founders.jpg';

export default function About() {
  return (
    <section className="about">
      <section className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-content">
          Based in Chicago, Illinois, Little Lemon is a family owned
          Mediterranean restaurant, focused on traditional recipes served with a
          modern twist. The chefs draw inspiration from Italian, Greek, and
          Turkish culture and have a menu of 12-15 items that they rotate
          seasonally.
        </p>

        <p className="about-content">
          The restaurant has a rustic and relaxed atmosphere with moderate
          prices, making it a popular place for a meal any time of the day.
        </p>

        <figure className="about-figure">
          <img src={founders} alt="Mario and Adrian" className="founders" />
          <figcaption className="about-figcaption">
            <i>Mario and Adrian, founders of Little Lemon.</i>
          </figcaption>
        </figure>

        <p className="about-content">
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant.
        </p>

        <p className="about-content">
          To craft the menu, Mario relies on family recipes and his experience
          as a chef in Italy. <br />
          Adrian does all the marketing for the restaurant and led the effort to
          expand the menu beyond classic Italian to incorporate additional
          cuisines from the mediterranean region.
        </p>
      </section>
    </section>
  );
}
