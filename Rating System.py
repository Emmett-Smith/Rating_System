# Desirable traits
attributes = ["Intelligence", "Toned Physique", "Kindness", "Physical Appearance", "Hair", "Masculinity", "Empathy/Thoughtfulness", "Reliability", "Smell", "Humor", "Competence (Practical Skills)"]

# Self-ratings
self_ratings = []
print("Rate Yourself (1-10):")
print("---------------------")
for attribute in attributes:
    rating = float(input(f"Rate your {attribute}: "))
    self_ratings.append(rating)

# Ratings from others
other_ratings = []
num_people = int(input("Enter the number of people providing ratings: "))

for i in range(num_people):
    ratings = []
    print(f"\nPerson {i+1} Ratings:")
    print("--------------------")
    for attribute in attributes:
        rating = float(input(f"Rate {attribute}: "))
        ratings.append(rating)
    other_ratings.append(ratings)

# Calculate average ratings
def calculate_average(ratings):
    return sum(ratings) / len(ratings)

# Calculate overall score
self_score = calculate_average(self_ratings)
other_scores = [calculate_average(ratings) for ratings in other_ratings]
overall_score = calculate_average([self_score] + other_scores)

# Print individual scores
print("\nIndividual Scores:")
print("------------------")
print(f"Your Score: {self_score:.2f}")
for i, score in enumerate(other_scores):
    print(f"Person {i+1} Score: {score:.2f}")

# Print overall score
print("\nOverall Score:")
print("--------------")
print(f"Your Overall Score: {overall_score:.2f}")

# Feedback and suggestions for improvement
if overall_score < 8:
    print("\nFurther suggestions for improvement:")
    print("----------------------------------")
    for i, attribute in enumerate(attributes):
        if self_ratings[i] < 5:
            print(f"- Work on improving your {attribute}.")
        elif self_ratings[i] < 8:
            print(f"- Continue to enhance your {attribute}.")
        else:
            print(f"- Your {attribute} is great!")

# Additional feedback based on specific traits
print("\nAdditional Feedback:")
print("-------------------")
if self_ratings[2] >= 8 and self_ratings[9] >= 8:
    print("- Your kindness and humor will definitely make you more attractive!")
if self_ratings[0] < 5 and self_ratings[3] < 5 and self_ratings[10] < 5:
    print("- Consider working on improving your intelligence, physical appearance, and practical skills.")
elif self_ratings[0] < 5:
    print("- Focus on improving your intelligence.")
elif self_ratings[3] < 5:
    print("- Put some effort into enhancing your physical appearance.")
elif self_ratings[10] < 5:
    print("- Develop your practical skills for a well-rounded personality.")

# Recommendations based on overall score
if overall_score < 6:
    print("\nRecommendation:")
    print("--------------")
    print("- Consider focusing on personal development and self-improvement.")
elif overall_score < 8:
    print("\nRecommendation:")
    print("--------------")
    print("- Continue to work on enhancing your desirable traits.")
else:
    print("\nRecommendation:")
    print("--------------")
    print("- Congratulations! You have strong desirable traits.")

# Final thoughts
print("\nFinal Thoughts:")
print("--------------")
if self_score > 9:
    print("- You should be proud of yourself! You have exceptional qualities.")
elif self_score < 4:
    print("- Don't be too hard on yourself. Everyone has areas they can improve on.")
else:
    print("- Keep up the good work and strive for continuous personal growth.")

# Suggestions for improvement from others
print("\nSuggestions for Improvement from Others:")
print("---------------------------------------")
for i, ratings in enumerate(other_ratings):
    print(f"Person {i+1} Suggestions:")
    print("-------------------------")
    for j, rating in enumerate(ratings):
        if rating < self_ratings[j]:
            print(f"- Improve your {attributes[j]} to be more appealing.")
        elif rating > self_ratings[j]:
            print(f"- Leverage your strength in {attributes[j]} to your advantage.")