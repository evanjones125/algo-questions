def reverse(str):
    reversed = []
    for i in range(len(str) - 1, -1, -1): reversed.append(str[i])
    return reversed

print(reverse('shrek'))