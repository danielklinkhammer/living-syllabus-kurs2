import json

with open("src/config/export-registry.json", "r") as f:
    data = json.load(f)

# Insert s04-api-intro immediately after s04-publish
idx = next(i for i, v in enumerate(data) if v["slideId"] == "s04-publish")
data.insert(idx + 1, {"slideId": "s04-api-intro", "block": "B04", "title": "APIs (Classic vs AI)"})

# Re-number B04 items
order = 1
for s in data:
    if s["block"] == "B04":
        s["order"] = order
        t = s['title']
        s["exportName"] = f"B04-{order:02d} \u00b7 {t}"
        order += 1

with open("src/config/export-registry.json", "w") as f:
    json.dump(data, f, indent=2)

print("Added API slide to registry.")
