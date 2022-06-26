# find smallest value in array
from json.encoder import INFINITY

arr = [3, 7, 2, 8, 5, -5, 6]

def find_smallest(array) :
    smallest = INFINITY
    for i in arr :
        if i < smallest :
            smallest = i
    return smallest

print(find_smallest(arr))