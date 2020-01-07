class Food {
    constructor(
        id,
        title,
        author,
        rating,
        description,
        imageUrl,
        difficulty,
        time,
        ingredients,
        directions,
        price,
        owner
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
        this.time = time;
        this.ingredients = ingredients;
        this.directions = directions;
        this.price = price;
        this.owner = owner;
    }
}

export default Food;
