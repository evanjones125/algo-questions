def palindrome(str):
    if len(str) is 1: return True
    else:
        converted = list(str)
        if converted[0] is not converted[-1]: return False

print(palindrome('racecars'))