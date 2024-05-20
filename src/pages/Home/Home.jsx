import css from "./Home.module.css";

export default function Home() {
  return (
    <div className={css.wrapper}>
      <section>
        <h1 className={css.display}>Welcome to Adventure Camper Rentals!</h1>
        <p className={css.sub}>
          Discover the freedom of the open road with Adventure Camper Rentals, your premier destination for camper van and RV rentals. Whether you're planning a weekend getaway, a cross-country road trip, or an outdoor adventure, we have the perfect vehicle to suit your needs.
        </p>
      </section>
      <section>
        <h2 className={css.title}>Why Choose Us?</h2>
        <p className={css.text}>
          From compact camper vans to spacious RVs, our diverse fleet ensures you'll find the ideal vehicle for your journey. Each camper is fully equipped with modern amenities to provide you with comfort and convenience on the go.
        </p>
        <ul className={css.list}>
          <li>
            Wide Range of Campers: From compact camper vans to spacious RVs, our diverse fleet ensures you'll find the ideal vehicle for your journey.
          </li>
          <li>
            Affordable Prices: We offer competitive pricing and flexible rental options to fit any budget. Enjoy the best value for your money without compromising on quality or service.
          </li>
          <li>
            Easy Booking Process: Our user-friendly online booking system makes reserving your camper quick and hassle-free. Simply choose your dates, select your vehicle, and you're ready to hit the road.
          </li>
          <li>
            Exceptional Customer Service: At Adventure Camper Rentals, we pride ourselves on delivering excellent customer service. Our friendly and knowledgeable team is here to assist you every step of the way, ensuring a smooth and enjoyable rental experience.
          </li>
        </ul>
      </section>
      <section>
        <h2 className={css.title}>Start Your Adventure Today</h2>
        <p className={css.text}>
          Explore breathtaking landscapes, immerse yourself in nature, and create unforgettable memories with Adventure Camper Rentals. Begin your adventure today by browsing our selection of campers and booking your next trip!
        </p>
        <p className={css.text}>
          For more information or to speak with a member of our team, please contact us at [phone number] or [email address]. We look forward to helping you embark on your next great adventure!
        </p>
      </section>
      <section>
        <h2 className={css.title}>Testimonials</h2>
        <ul className={css.list}>
          <li>
            "Our camper van rental experience was fantastic! The van was clean, well-maintained, and had everything we needed for a comfortable trip. Highly recommend Adventure Camper Rentals!" - Sarah M.
          </li>
          <li>
            "Great service and affordable prices. The booking process was easy, and the RV was perfect for our family vacation. We'll definitely rent from them again." - Mark D.
          </li>
        </ul>
      </section>
      <footer>
        <p className={css.title}>Connect with Us</p>
        <p className={css.text}>
          Follow us on social media for the latest updates, travel tips, and special offers:
        </p>
        <ul className={css.list}>
          <li>
            Facebook: <a href="[Facebook link]" className={css.link}>[Facebook link]</a>
          </li>
          <li>
            Instagram: <a href="[Instagram link]" className={css.link}>[Instagram link]</a>
          </li>
          <li>
            Twitter: <a href="[Twitter link]" className={css.link}>[Twitter link]</a>
          </li>
        </ul>
        <p className={css.text}>
          Adventure awaits with Adventure Camper Rentals. Let's hit the road together!
        </p>
      </footer>
    </div>
  );
}
