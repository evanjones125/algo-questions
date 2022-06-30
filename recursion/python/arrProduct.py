# take in array and return the sum of all its elements
def arr_product(arr):
    if len(arr) is 1: return arr[0]
    else:
        return arr[-1] + arr_product(arr[:-1])

print(arr_product([1, 3, 4, 8]))