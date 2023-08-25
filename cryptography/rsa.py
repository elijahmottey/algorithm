def is_prime(number):
    if number <= 1:
        return False

    # We only need to check divisors up to the square root of the number.
    # If a number has a divisor greater than its square root, it must also have a divisor smaller than it.
    for divisor in range(2, int(number**0.5) + 1):
        if number % divisor == 0:
            return False

    return True

# Example usage:
num = 39
if is_prime(num):
    print(f"{num} is a prime number.")
else:
    print(f"{num} is not a prime number.")
