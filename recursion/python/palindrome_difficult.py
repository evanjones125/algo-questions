def palindrome(str):
    if len(str) is 1 or 0: return True
    else:
        converted = list(str)
        for i in converted:
            if converted[i] == " ": converted.pop(converted[i])
        if converted[0] is not converted[-1]: return False
        else: return palindrome(converted[1:-1])

print(palindrome('race car'))