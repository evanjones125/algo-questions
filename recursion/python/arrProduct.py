# take in array and return the sum of all its elements
def arr_product(arr):
    output = 0
    for i in range(len(arr)):
        output += arr[i]
    return output

print(arr_product([1, 4, 6, 2, 5]))