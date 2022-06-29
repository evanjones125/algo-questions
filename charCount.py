# given a string, output a count of the incidence of each character
def char_count(str):
    output = {}

    # iterate through str
    for i in range(len(str)):
        output[str[i]] = 1
    # if output with str[i] label doesn't exist, create one
    # if it does exist, increment it

    return output

print(char_count('shrek is love'))