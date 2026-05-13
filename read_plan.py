with open("docs/plan.md") as f:
    lines = f.readlines()

print("--- TASK 2.2 ABOUT ---")
print("".join(lines[145:190]))

print("--- TASK 2.3 FAQ ---")
print("".join(lines[200:250]))
