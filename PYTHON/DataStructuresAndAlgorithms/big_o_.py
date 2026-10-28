
#$$ 5 → 5+4+3+2+1

# Performance is just timing the milliseconds
# Time <long> and Space <memory does it use>
import time

# Front end →
# Back-end speed execution
# Big O → count operations
# Single thing that is n → 1
# Linear time O(n)
# n = 1 second, 30000 → 20 seconds
# 2,3,4,5,200 → 1 second


def up_to_n(n):
    # Add all the values up to n
    sum = 0

    for i in range(1, n + 1):
        sum = sum + i

    print(f"Linear time: when n is {n} sum is {sum}")
    return sum


# Constant time O(1)
# 1000, 2000, 30000

def up_to_n_2(n):
    sum = n * (n + 1) / 2
    print(f"Constant time: when n is {n} sum is {sum}")
    return sum


# Simplify the operations
# up_to_n(50000) → linear time
# up_to_n_2(50000) → constant time

n = 200000

start_time = time.perf_counter()
up_to_n_2(n)
end_time = time.perf_counter()
diff_ms = (end_time - start_time) * 1000
print(f"\nExecution time: {diff_ms} ms")

start_time = time.perf_counter()
up_to_n(n)
end_time = time.perf_counter()
diff_ms = (end_time - start_time) * 1000
print(f"\nExecution time: {diff_ms} ms")


# Dictionary example from the bottom of the screenshot
ar = {
    "1": {
        "left": {
            "2": {
                "left": {},
                "right": {}
            }
        },
        "right": {}
    }
}
