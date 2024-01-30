import random

def roll_dice():
    return random.randint(1, 6)

def main():
    print("Welcome to the Dice Simulator!")
    play_again = True

    while play_again:
        input("Press Enter to roll the dice...")
        result = roll_dice()
        print("You rolled a", result)

        play_again_input = input("Do you want to roll again? (yes/no): ")
        play_again = play_again_input.lower() == "yes"

    print("Thank you for playing!")

if __name__ == "__main__":
    main()