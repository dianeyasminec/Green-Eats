

const details = [
    
    {
        'id': 8,
        'title': 'Baked Salmon',
        'ingredients': 'Season salmon fillets with salt, pepper, and a sprinkle of dried dill',
        'recipe': 'Place the salmon on a lined baking sheet and bake for 12-15 minutes or until the internal temperature reaches 145°F. Serve with a side of roasted vegetables or a mixed green salad for a light and flavorful dinner.',
        'servings': 2,
        'category': 'meat',
        'image':'https://media.istockphoto.com/id/913034864/photo/fish-dish-grilled-salmon-and-asparagus.jpg?s=612x612&w=0&k=20&c=f0NLE67qkpMXf_wa3kPY3QKs-xxEDI4YNqPu72qdGeU='   ,    
     },
    
     {
        'id': 11,
        'title': 'Lemon Garlic Shrimp',
        'ingredients': 'Add in shrimp and cook for about 2-3 minutes until pink. Squeeze fresh lemon juice over the shrimp and sprinkle with parsley. Serve over a bed of rice or with crusty bread.',
        'recipe': 'In a large skillet over medium heat, melt butter and add minced garlic. ',
        'servings': 2,
        'category': 'fish',
        'image': 'https://laraclevenger.com/wp-content/uploads/2022/07/BLACKSTONE-SHRIMP-2-1-683x1024.jpg',
    },  
    {
        'id': 2 ,
        'title' : 'Roasted Cauliflower and Chickpeas with Herby Tahini',
        'image': 'https://www.lastingredient.com/wp-content/uploads/2020/10/roasted-cauliflower-and-chickpeas-with-herby-tahini5-823x1024.webp',
        'ingredients': '1 head Cauliflower, 1 15 ounce can Chickpeas, 1 Scallion',
        'recipe': 'roast cauliflower and chickpeas with olive oil and spices. Blend tahini, lemon juice, garlic, herbs, and water to make the herby tahini sauce. Drizzle the sauce over the top.',
        'serving': 4,
        'category': 'gluten-free'

    },
   
        
        {
            'id': 10,
            'title': 'Grilled Salmon',
            'ingredients': 'Rub salmon fillets with olive oil and season with salt and black pepper',
            'recipe': 'Grill the fillets for about 3-4 minutes per side or until the flesh is firm and opaque. Serve with a side of a green salad and rice and enjoy your delicious meal.',
            'servings': 2,
            'category': 'fish',
            'image': 'https://www.theseasonedmom.com/wp-content/uploads/2021/09/grilled-salmon-8.jpg',
        },
        {
            'id': 7,
            'title': 'Grilled Chicken',
            'ingredients': 'Marinate boneless, skinless chicken breasts with olive oil, lemon juice, garlic, salt, and pepper.',
            'recipe': 'Preheat the grill to medium-high heat and grill the chicken for 5-6 minutes on each side or until the internal temperature reaches 165°F. Serve with  a side salad .',
            'servings': 2,
            'category': 'meat',
            'image': 'https://www.beyondthechickencoop.com/wp-content/uploads/2020/08/Honey-Lemon-Chicken-Image.jpg',
        },
        {
            'id': 12,
            'title': 'Baked Cod with Herbs',
            'ingredients': 'chopped fresh herbs such as dill, parsley, and thyme, with olive oil, lemon juice, and minced garlic. ',
            'recipe': 'Place cod fillets in a baking dish and brush the herb mixture on top. Bake for 15-20 minutes. Serve with a side of steamed vegetables or a fresh salad.',
            'servings': 2,
            'category': 'fish',
            'image': 'https://foodnessgracious.com/wp-content/uploads/2019/09/how-to-cook-cod-01.jpg'
        },
        {
            'id': 4 ,
            'title' : 'Gluten-Free Pancakes',
            'image': 'https://food-images.files.bbci.co.uk/food/recipes/buckwheatpancakes_80141_16x9.jpg',
            'ingredients': ' gluten-free flour, sugar, baking powder, baking soda, salt, milk, egg, vegetable oil, and vanilla extract.',
            'recipe': 'Add flour, sugar, baking powder, baking soda, and salt in a mixing bowl. Whisk together milk, egg,  oil, and vanilla extract in another one. Combine them, and cook until cooked through.',
            'category': 'gluten-free'
        },
        {
            'id': 9,
            'title': 'Slow Cooker Beef Stew',
            'ingredients': 'Cut beef chuck into bite-sized pieces, gluten-free flour, salt, and pepper. ',
            'recipe': 'Brown the beef with olive oil and then transfer it to a slow cooker. Add in diced potatoes, carrots, onions, celery, beef broth, tomato paste, and your herbs and spices. Cook on low for 8 hours or on high for 4 hours.',
            'servings': 2,
            'category': 'meat',
            'image': 'https://www.southernliving.com/thmb/_ADe55-RVDRCBbgIaaPj3tnqxto=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2548201_lostc_0062_0_0_2_0-37afb770a1974a92a8c1225f1d64c9b6.jpg',
        },
        {
            'id': 1 ,
            'title' : 'Thai Peanut Dressing',
            'image': 'https://thefoodcharlatan.com/wp-content/uploads/2021/02/Easy-Thai-Peanut-Sauce-with-Authentic-Flavor-11.jpg',
            'ingredients': '1 tbsp Peanut butter, 1 tbsp Amino acids, 2 tsp Honey, 1 tsp vinegar, 1 clove Garlic, 1 tsp Ginger, ¼ tsp Chili flakes',
            'recipe': 'Cup Edamame boiled add dry Quinoa, ½ cup Cabbage, ½ cup Carrots, ¼ cup Cilantro, 3 Green Onion, 2 tbsp Roast and Unsalted Peanuts,1 tbsp Sesame seeds',
            'category': 'gluten-free'
        },
        
        {
            'id': 5 ,
            'title' : 'Gluten-Free Quinoa Salad with Roasted Vegetables',
            'image': 'https://www.eatingbirdfood.com/wp-content/uploads/2014/01/roasted-broccoli-quinoa-salad-2-670x1005.jpg',
            'ingredients': ' one cup of quinoa, butternut squash, red onion, red bell pepper, yellow bell pepper, olive oil, salt and pepper. balsamic vinegar and honey, parsley and crumbled feta cheese.',
            'recipe': 'Bring quinoa and water to a boil, then reduce the heat and let it simmer, toss butternut squash, red onion, red and yellow bell peppers in olive oil and season with salt and pepper. Spread the vegetables on a baking sheet and roast for 20-25 minutes. In a large bowl, mix the cooked quinoa, roasted vegetables, and balsamic-honey dressing. Enjoy your gluten-free Quinoa Salad with Roasted Vegetables food. Bon appetit Dear.',
            'category': 'gluten-free'
        },
        
        {
            'id': 3 ,
            'title' : 'Spicy Gluten-Free Chicken and Cheddar Waffles with Blackberry-Maple Syrup',
            'image': 'https://i0.wp.com/www.globalbakes.com/wp-content/uploads/2020/04/Chicken-and-waffles-7-scaled.jpg?fit=1707%2C2560&ssl=1',
            'ingredients': '2 pounds chicken tenders, salt and black pepper, ½ cup coconut flour, ½ cup almond flour, 2 ¼ cups gluten-free baking flour, 1 tps baking powder, 1 stick butter, 1 tps maple syrup, 1 cup Cheddar cheese, 3 eggs, 1 ¾ cups almond milk.',
            'recipe': ' Marinate the chicken with orange juice and seasoning, and dredge it in orange zest, coconut flour, almond flour, garlic, and paprika. For the waffle batter, combine flour, baking powder, rosemary, thyme, and sea salt, and mix with beaten butter, maple syrup, eggs, and milk. Add Cheddar cheese to the batter and cook in a waffle iron. Bake the chicken until browned.',
            'serving': 8,
            'category': 'gluten-free'

        },
        
        {
            'id': 6 ,
            'title' : 'Roasted Butternut Squash Quinoa Salad',
            'image': 'https://www.joyfulhealthyeats.com/wp-content/uploads/2015/10/Harvest-Roasted-Butternut-Squash-Quinoa-Salad-4.jpg',
            'ingredients': 'quinoa , diced butternut squash, red onion, red and yellow bell peppers, olive oil, salt, and pepper, balsamic vinegar and honey, vegetables, chopped parsley, and crumbled feta cheese.',
            'recipe': 'The recipe involves boiling quinoa in water until it is tender, while simultaneously roasting butternut squash, red onion, and bell peppers in the oven with olive oil, salt, and pepper. A balsamic-honey dressing is made separately and then combined with the cooked quinoa and roasted vegetables. Finally, fresh parsley and crumbled feta cheese are added to the mix. The salad can be served warm or at room temperature. Enjou your Roasted Butternut Squash Quinoa Salad',
            'category': 'gluten-free'

        },
  

]

export default details;