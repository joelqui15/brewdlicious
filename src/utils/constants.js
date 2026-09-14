import caramelLatte from "../images/caramelLatte.webp";
import mochaLatte from "../images/mochaLatte.webp";
import vanillaColdBrew from "../images/vanillaColdBrew.webp";
import breakfast from "../images/breakfast.webp";
import hotCoffee from "../images/hot-coffee.webp";
import icedCoffee from "../images/iced-coffee.webp";
import lotusEnergy from "../images/lotus-energy.webp";
import pastry from "../images/pastry.webp";
import smoothies from "../images/smoothies.webp";

export const favoriteMenuItems = [
  {
    id: 1,
    imageUrl: caramelLatte,
    price: "$4.50",
    description:
      "Smooth espresso and creamy milk finished with a rich caramel drizzle.",
  },
  {
    id: 2,
    imageUrl: mochaLatte,
    price: "$4.75",

    description:
      "Rich chocolate and espresso blended with steamed milk and topped with whipped cream.",
  },
  {
    id: 3,
    imageUrl: vanillaColdBrew,
    price: "$4.25",
    description:
      "Cold brew coffee infused with vanilla syrup, served over ice for a refreshing treat.",
  },
];

export const menuCategories = [
  {
    id: 1,
    title: "⋆☕︎ Hot Coffee",
    description: "Classic lattes, cappuccinos, & bold craft pours.",
    imageUrl: hotCoffee,
  },
  {
    id: 2,
    title: "𖠚 Iced Coffee",
    description: "Smooth cold brew, iced macchiatos, & cold foam lattes.",
    imageUrl: icedCoffee,
  },
  {
    id: 3,
    title: "⚡︎ Lotus Energy Drinks",
    description: "Plant-based energy elixirs in crisp fruity infusions.",
    imageUrl: lotusEnergy,
  },
  {
    id: 4,
    title: "❦ Smoothies",
    description: "Rich real fruit blends to power up your morning run.",
    imageUrl: smoothies,
  },
  {
    id: 5,
    title: "☀︎ Breakfast",
    description: "Hearty breakfast sandwiches, loaded biscuits, & wraps.",
    imageUrl: breakfast,
  },
  {
    id: 6,
    title: "✿ Pastries",
    description:
      "Delicious baked goods, from croissants to muffins, perfect with your coffee.",
    imageUrl: pastry,
  },
];
