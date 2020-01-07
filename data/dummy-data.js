import Food from "../models/food";
import Order from "../models/order";

export const ORDERS = [
    new Order(
        Math.ceil(Math.random() * 1000000),
        1578070773,
        "Processing",
        ["f1", "f1", "f1", "f4", "f5"],
        {
            subtotal: 50.11,
            tax: 4.41,
            total: 54.52
        }
    )
];

export const GOODS = [
    new Food(
        "f1",
        "Morning Oatmeal",
        "Dek Arya Stark",
        4,
        'Oatmeal is a type of coarse flour made of hulled oat grains (groats) that have either been milled (ground), steel-cut, or rolled. Ground oats are also called "white oats". Steel-cut oats are known as "coarse oatmeal", "Irish oatmeal" or "pinhead oats".',
        "oatmeal",
        "Easy",
        45,
        [
            "1 cup old-fashioned rolled oats",
            "1 teaspoon honey",
            "1 cup milk",
            "handful of blueberries",
            "1/8 teaspoon kosher salt",
            "1 cup water",
            "1/2 teaspoon ground cinnamon"
        ],
        [
            "Combine oats, milk, water, salt, and cinnamon in a medium saucepan. Bring to a boil, then reduce heat to low.",

            "Simmer uncovered for 3 to 5 minutes until thickened, stirring occasionally. Remove from heat and let cool slightly.",

            "Divide equally between two bowls. Drizzle each serving with 1/2 teaspoon honey. Add additional desired toppings and serve.",

            "For dairy-free oatmeal, substitute your favorite nut milk."
        ],
        6.99,
        "o1"
    ),
    new Food(
        "f2",
        "Avocado Toast",
        "Van Jay Butabaev",
        5,
        "Avocado toast is a type of open sandwich or toast made with mashed avocado and salt, pepper, and citrus juice on toast. Potential additional ingredients that enhance the flavor are olive oil, hummus, red pepper flakes, feta, dukkah, tomato, and many other toppings.",
        "avocado",
        "Easy",
        15,
        [
            "1 cup old-fashioned rolled oats",
            "1 teaspoon honey",
            "1 cup milk",
            "handful of blueberries",
            "1/8 teaspoon kosher salt",
            "1 cup water",
            "1/2 teaspoon ground cinnamon"
        ],
        [
            "Combine oats, milk, water, salt, and cinnamon in a medium saucepan. Bring to a boil, then reduce heat to low.",

            "Simmer uncovered for 3 to 5 minutes until thickened, stirring occasionally. Remove from heat and let cool slightly.",

            "Divide equally between two bowls. Drizzle each serving with 1/2 teaspoon honey. Add additional desired toppings and serve.",

            "For dairy-free oatmeal, substitute your favorite nut milk."
        ],
        8.99,
        "o1"
    ),
    new Food(
        "f3",
        "Greenwich Soup",
        "Lone Druid",
        3,
        "Green Goddess Immune Boosting Soup ~ this nourishing soup is the cold weather equivalent to your power smoothie.  It’s a vibrant soup packed with everything you need to get through cold and flu season without so much as a sniffle.",
        "greenwich",
        "Hard",
        60,
        [
            "1 cup old-fashioned rolled oats",
            "1 teaspoon honey",
            "1 cup milk",
            "handful of blueberries",
            "1/8 teaspoon kosher salt",
            "1 cup water",
            "1/2 teaspoon ground cinnamon"
        ],
        [
            "Combine oats, milk, water, salt, and cinnamon in a medium saucepan. Bring to a boil, then reduce heat to low.",

            "Simmer uncovered for 3 to 5 minutes until thickened, stirring occasionally. Remove from heat and let cool slightly.",

            "Divide equally between two bowls. Drizzle each serving with 1/2 teaspoon honey. Add additional desired toppings and serve.",

            "For dairy-free oatmeal, substitute your favorite nut milk."
        ],
        13.99
    ),
    new Food(
        "f4",
        "Leto Omelette",
        "Hurshida Bestie",
        5,
        "In cuisine, an omelette or omelet is a dish made from beaten eggs fried with butter or oil in a frying pan. It is quite common for the omelette to be folded around fillings such as cheese, chives, vegetables, mushrooms, meat, or some combination of the above.",
        "omelette",
        "Medium",
        30,
        [
            "1 cup old-fashioned rolled oats",
            "1 teaspoon honey",
            "1 cup milk",
            "handful of blueberries",
            "1/8 teaspoon kosher salt",
            "1 cup water",
            "1/2 teaspoon ground cinnamon"
        ],
        [
            "Combine oats, milk, water, salt, and cinnamon in a medium saucepan. Bring to a boil, then reduce heat to low.",

            "Simmer uncovered for 3 to 5 minutes until thickened, stirring occasionally. Remove from heat and let cool slightly.",

            "Divide equally between two bowls. Drizzle each serving with 1/2 teaspoon honey. Add additional desired toppings and serve.",

            "For dairy-free oatmeal, substitute your favorite nut milk."
        ],
        8.99,
        "o1"
    ),
    new Food(
        "f5",
        "Potato Mesanant",
        "Dek Arya Stark",
        3,
        "Mashed potato or mashed potatoes, colloquially known as mash, is a dish prepared by mashing boiled, peeled or unpeeled potatoes. Milk, butter, salt and pepper are frequently used in preparation and it is sometimes whipped at the end. The dish is usually a side dish to meat or vegetables.",
        "potato",
        "Medium",
        40,
        [
            "1 cup old-fashioned rolled oats",
            "1 teaspoon honey",
            "1 cup milk",
            "handful of blueberries",
            "1/8 teaspoon kosher salt",
            "1 cup water",
            "1/2 teaspoon ground cinnamon"
        ],
        [
            "Combine oats, milk, water, salt, and cinnamon in a medium saucepan. Bring to a boil, then reduce heat to low.",

            "Simmer uncovered for 3 to 5 minutes until thickened, stirring occasionally. Remove from heat and let cool slightly.",

            "Divide equally between two bowls. Drizzle each serving with 1/2 teaspoon honey. Add additional desired toppings and serve.",

            "For dairy-free oatmeal, substitute your favorite nut milk."
        ],
        10.99,
        "o2"
    ),
    new Food(
        "f6",
        "Salom Season",
        "Elon Grey Joy",
        4,
        "Salmon is a common food classified as an oily fish with a rich content of protein and omega-3 fatty acids.",
        "salmon",
        "Hard",
        30,
        [
            "1 cup old-fashioned rolled oats",
            "1 teaspoon honey",
            "1 cup milk",
            "handful of blueberries",
            "1/8 teaspoon kosher salt",
            "1 cup water",
            "1/2 teaspoon ground cinnamon"
        ],
        [
            "Combine oats, milk, water, salt, and cinnamon in a medium saucepan. Bring to a boil, then reduce heat to low.",

            "Simmer uncovered for 3 to 5 minutes until thickened, stirring occasionally. Remove from heat and let cool slightly.",

            "Divide equally between two bowls. Drizzle each serving with 1/2 teaspoon honey. Add additional desired toppings and serve.",

            "For dairy-free oatmeal, substitute your favorite nut milk."
        ],
        25.99,
        "o2"
    ),
    new Food(
        "f7",
        "Guacamole",
        "Kat Doybug",
        2,
        "Guacamole is an avocado-based dip, spread, or salad first developed by the Aztecs in present-day Mexico. In addition to its use in modern Mexican cuisine, it has become part of international and American cuisine as a dip, condiment and salad ingredient.",
        "guacamole",
        "Hard",
        60,
        [
            "1 cup old-fashioned rolled oats",
            "1 teaspoon honey",
            "1 cup milk",
            "handful of blueberries",
            "1/8 teaspoon kosher salt",
            "1 cup water",
            "1/2 teaspoon ground cinnamon"
        ],
        [
            "Combine oats, milk, water, salt, and cinnamon in a medium saucepan. Bring to a boil, then reduce heat to low.",

            "Simmer uncovered for 3 to 5 minutes until thickened, stirring occasionally. Remove from heat and let cool slightly.",

            "Divide equally between two bowls. Drizzle each serving with 1/2 teaspoon honey. Add additional desired toppings and serve.",

            "For dairy-free oatmeal, substitute your favorite nut milk."
        ],
        15.99,
        "o2"
    ),
    new Food(
        "f8",
        "Svejiy Salad",
        "Mehmet Afandi",
        3,
        "Slaws are some of the best make-ahead salad recipes out there. Typically made with hearty vegetables like cabbage, kale, or broccoli, they’re sturdy enough to be dressed ahead of time.",
        "svejiy",
        "Easy",
        20,
        [
            "1 cup old-fashioned rolled oats",
            "1 teaspoon honey",
            "1 cup milk",
            "handful of blueberries",
            "1/8 teaspoon kosher salt",
            "1 cup water",
            "1/2 teaspoon ground cinnamon"
        ],
        [
            "Combine oats, milk, water, salt, and cinnamon in a medium saucepan. Bring to a boil, then reduce heat to low.",

            "Simmer uncovered for 3 to 5 minutes until thickened, stirring occasionally. Remove from heat and let cool slightly.",

            "Divide equally between two bowls. Drizzle each serving with 1/2 teaspoon honey. Add additional desired toppings and serve.",

            "For dairy-free oatmeal, substitute your favorite nut milk."
        ],
        7.99,
        "o1"
    ),
    new Food(
        "f9",
        "Ezogelin Soup",
        "John Doe",
        4,
        "Ezogelin soup or Ezo gelin soup is a common soup in Turkish cuisine. The main ingredients are bulgur and red lentils. The origin of the soup is attributed to Ezo the bride from Gaziantep.",
        "ezogelin",
        "Hard",
        65,
        [
            "1 cup old-fashioned rolled oats",
            "1 teaspoon honey",
            "1 cup milk",
            "handful of blueberries",
            "1/8 teaspoon kosher salt",
            "1 cup water",
            "1/2 teaspoon ground cinnamon"
        ],
        [
            "Combine oats, milk, water, salt, and cinnamon in a medium saucepan. Bring to a boil, then reduce heat to low.",

            "Simmer uncovered for 3 to 5 minutes until thickened, stirring occasionally. Remove from heat and let cool slightly.",

            "Divide equally between two bowls. Drizzle each serving with 1/2 teaspoon honey. Add additional desired toppings and serve.",

            "For dairy-free oatmeal, substitute your favorite nut milk."
        ],
        8.99,
        "o2"
    )
];
