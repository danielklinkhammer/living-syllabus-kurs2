import json

with open("src/config/export-registry.json", "r") as f:
    data = json.load(f)

data = [s for s in data if s["slideId"] != "s03-d-work"]

order = 1
for s in data:
    if s["block"] == "B03":
        s["order"] = order
        s["exportName"] = f"B03-{order:02d} \u00b7 {s['title']}"
        order += 1

with open("src/config/export-registry.json", "w") as f:
    json.dump(data, f, indent=2)

print("Registry updated")
