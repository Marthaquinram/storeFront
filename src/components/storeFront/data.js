// import tech from '../../assets/images/tech.jpg';
// import clothes from '../../assets/images/clothing.jpg';
// import food from '../../assets/images/food.jpg';
import photoAlpaca from '../../assets/images/alpaca.jpeg';



export const data = [
  {
    id: 0,
    name: "Gaming Monitor",
    description: "UHD",
    category: "electronics",
    price: 600,
    inventory: 100,
    image: photoAlpaca,
  },
  {
    id: 1,
    name: "Arsenal Authentic Soccer Jersey",
    description: "medium",
    category: "clothing",
    price: 100,
    inventory: 1000,
    // image: Arsenal,
  },
  {
    id: 2,
    name: "El Camion",
    description: "The best food truck in Seattle",
    category: "food",
    price: 20,
    inventory: 50,
    image: photoAlpaca,
  },
];
export const categoryTabs = [
  {
    id: 0,
    title: 'All',
    value: 'all',
  },
  {
    id: 1,
    title: 'Electronics',
    value: 'electronics',
  },
  {
    id: 2,
    title: 'Clothing',
    value: 'clothing',
  },
  {
    id: 3,
    title: 'Food',
    value: 'food',
  },
]
module.export = {
  data,
  categoryTabs,
}
