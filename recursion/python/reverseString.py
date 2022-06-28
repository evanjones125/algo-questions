# reverse string using decrementing for loop
# def reverse(str):
#     reversed = []
#     for i in range(len(str) - 1, -1, -1): reversed.append(str[i])
#     return reversed

# reverse string using backwards slice
def reverse(str):
    return str[::-1]

print(reverse('hello'))