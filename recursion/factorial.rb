def factorial (num)
    num === 0 ? 1 : num * factorial(num - 1)
    end

puts factorial(4)