document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('mealModal');
    const closeButton = document.querySelector('.close-button');
    const mealCards = document.querySelectorAll('.meal-card');

    // Meal data organized by date
    const mealData = {
        'May 29, 2025': {
            breakfast: {
                foodItems: 'Greek yogurt parfait with granola and berries',
                calories: '320 kcal',
                notes: 'Used low-fat yogurt and homemade granola'
            },
            lunch: {
                foodItems: 'Quinoa bowl with grilled chicken and roasted vegetables',
                calories: '480 kcal',
                notes: 'Added avocado for healthy fats'
            },
            dinner: {
                foodItems: 'Baked salmon with sweet potato mash',
                calories: '520 kcal',
                notes: 'Seasoned with herbs and lemon'
            }
        },
        'May 28, 2025': {
            breakfast: {
                foodItems: 'Whole grain toast with scrambled eggs and spinach',
                calories: '380 kcal',
                notes: 'Added cherry tomatoes on the side'
            },
            lunch: {
                foodItems: 'Mediterranean salad with falafel',
                calories: '440 kcal',
                notes: 'Homemade tahini dressing'
            },
            dinner: {
                foodItems: 'Turkey and vegetable stir-fry with brown rice',
                calories: '490 kcal',
                notes: 'Used low-sodium soy sauce'
            }
        },
        'May 27, 2025': {
            breakfast: {
                foodItems: 'Oatmeal with banana and almond butter',
                calories: '340 kcal',
                notes: 'Added chia seeds for extra nutrition'
            },
            lunch: {
                foodItems: 'Tuna wrap with mixed greens',
                calories: '420 kcal',
                notes: 'Used whole wheat wrap'
            },
            dinner: {
                foodItems: 'Grilled chicken breast with quinoa pilaf',
                calories: '510 kcal',
                notes: 'Served with roasted Brussels sprouts'
            }
        },
        'May 26, 2025': {
            breakfast: {
                foodItems: 'Smoothie bowl with mixed berries and granola',
                calories: '310 kcal',
                notes: 'Added protein powder'
            },
            lunch: {
                foodItems: 'Chickpea and kale soup with whole grain bread',
                calories: '390 kcal',
                notes: 'Homemade vegetable broth base'
            },
            dinner: {
                foodItems: 'Lean beef stir-fry with rice noodles',
                calories: '530 kcal',
                notes: 'Added extra vegetables'
            }
        },
        'May 25, 2025': {
            breakfast: {
                foodItems: 'Protein pancakes with fresh fruits',
                calories: '360 kcal',
                notes: 'Used protein powder in batter'
            },
            lunch: {
                foodItems: 'Grilled vegetable and hummus sandwich',
                calories: '410 kcal',
                notes: 'On sourdough bread'
            },
            dinner: {
                foodItems: 'Baked cod with roasted vegetables',
                calories: '470 kcal',
                notes: 'Herbs and lemon seasoning'
            }
        },
        'May 24, 2025': {
            breakfast: {
                foodItems: 'Cottage cheese with fresh peaches and honey',
                calories: '290 kcal',
                notes: 'Added almonds for crunch'
            },
            lunch: {
                foodItems: 'Turkey and avocado wrap',
                calories: '430 kcal',
                notes: 'With spinach and tomatoes'
            },
            dinner: {
                foodItems: 'Shrimp scampi with zucchini noodles',
                calories: '460 kcal',
                notes: 'Light garlic sauce'
            }
        },
        'May 23, 2025': {
            breakfast: {
                foodItems: 'Egg white omelet with mushrooms and spinach',
                calories: '280 kcal',
                notes: 'Added feta cheese'
            },
            lunch: {
                foodItems: 'Lentil soup with mixed vegetables',
                calories: '380 kcal',
                notes: 'Served with quinoa'
            },
            dinner: {
                foodItems: 'Grilled tofu steak with sweet potato',
                calories: '440 kcal',
                notes: 'Marinated in teriyaki sauce'
            }
        },
        'May 22, 2025': {
            breakfast: {
                foodItems: 'Chia seed pudding with mango',
                calories: '330 kcal',
                notes: 'Made with almond milk'
            },
            lunch: {
                foodItems: 'Greek salad with grilled chicken',
                calories: '450 kcal',
                notes: 'Light vinaigrette dressing'
            },
            dinner: {
                foodItems: 'Vegetable curry with brown rice',
                calories: '490 kcal',
                notes: 'Medium spicy, coconut milk base'
            }
        },
        'May 21, 2025': {
            breakfast: {
                foodItems: 'Whole grain waffles with berries',
                calories: '350 kcal',
                notes: 'Sugar-free maple syrup'
            },
            lunch: {
                foodItems: 'Quinoa and black bean bowl',
                calories: '420 kcal',
                notes: 'Added corn and avocado'
            },
            dinner: {
                foodItems: 'Grilled fish tacos',
                calories: '480 kcal',
                notes: 'With cabbage slaw and lime'
            }
        },
        'May 20, 2025': {
            breakfast: {
                foodItems: 'Avocado toast with poached egg',
                calories: '340 kcal',
                notes: 'Added red pepper flakes'
            },
            lunch: {
                foodItems: 'Chicken Caesar salad',
                calories: '430 kcal',
                notes: 'Light Caesar dressing'
            },
            dinner: {
                foodItems: 'Vegetable lasagna',
                calories: '520 kcal',
                notes: 'Made with whole wheat pasta'
            }
        },
        'May 19, 2025': {
            breakfast: {
                foodItems: 'Breakfast burrito with eggs and beans',
                calories: '380 kcal',
                notes: 'Whole wheat tortilla'
            },
            lunch: {
                foodItems: 'Mediterranean bowl with falafel',
                calories: '450 kcal',
                notes: 'With hummus and tabbouleh'
            },
            dinner: {
                foodItems: 'Grilled salmon with asparagus',
                calories: '490 kcal',
                notes: 'Lemon herb seasoning'
            }
        },
        'May 18, 2025': {
            breakfast: {
                foodItems: 'Protein smoothie with spinach',
                calories: '310 kcal',
                notes: 'Added chia seeds'
            },
            lunch: {
                foodItems: 'Turkey club sandwich',
                calories: '440 kcal',
                notes: 'On whole grain bread'
            },
            dinner: {
                foodItems: 'Chicken stir-fry with brown rice',
                calories: '510 kcal',
                notes: 'Mixed vegetables'
            }
        },
        'May 17, 2025': {
            breakfast: {
                foodItems: 'Overnight oats with apple and cinnamon',
                calories: '320 kcal',
                notes: 'Made with almond milk'
            },
            lunch: {
                foodItems: 'Caprese sandwich with pesto',
                calories: '410 kcal',
                notes: 'Fresh mozzarella'
            },
            dinner: {
                foodItems: 'Baked chicken with roasted vegetables',
                calories: '480 kcal',
                notes: 'Herbs de Provence seasoning'
            }
        },
        'May 16, 2025': {
            breakfast: {
                foodItems: 'Fruit and nut granola bowl',
                calories: '340 kcal',
                notes: 'With Greek yogurt'
            },
            lunch: {
                foodItems: 'Vegetable soup with crackers',
                calories: '380 kcal',
                notes: 'Homemade broth'
            },
            dinner: {
                foodItems: 'Tofu and vegetable curry',
                calories: '460 kcal',
                notes: 'With brown rice'
            }
        }
    };

    // Open modal when clicking a meal card
    mealCards.forEach(card => {
        card.addEventListener('click', function() {
            const mealType = this.dataset.meal;
            const date = this.closest('.meal-row').querySelector('.date-column').textContent;
            const imgSrc = this.querySelector('img').src;
            
            // Update modal content
            modal.querySelector('.modal-image').src = imgSrc;
            modal.querySelector('.meal-date').textContent = date;
            modal.querySelector('.meal-type').textContent = 
                mealType.charAt(0).toUpperCase() + mealType.slice(1);
            
            // Get meal details from the date-specific data
            const details = mealData[date][mealType];
            modal.querySelector('.food-items').textContent = details.foodItems;
            modal.querySelector('.calories').textContent = details.calories;
            modal.querySelector('.notes').textContent = details.notes;
            
            // Show modal
            modal.style.display = 'block';
        });
    });

    // Close modal when clicking the close button
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});