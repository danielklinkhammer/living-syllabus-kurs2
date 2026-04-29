import json

with open("src/config/export-registry.json", "r") as f:
    data = json.load(f)

# Keep everything except the old 's04-chalD2' slide
data = [s for s in data if s["slideId"] != "s04-chalD2"]

# Re-number B04
order = 1
for s in data:
    if s["block"] == "B04":
        s["order"] = order
        s["exportName"] = f"B04-{order:02d} \u00b7 {s['title']}"
        order += 1

with open("src/config/export-registry.json", "w") as f:
    json.dump(data, f, indent=2)

print("Registry E.1 updated")
