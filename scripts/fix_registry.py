import json

with open("src/config/export-registry.json", "r") as f:
    data = json.load(f)

new_slides = [
  {"slideId": "s04-chalE1-intro", "block": "B04", "title": "Aufgabenstellung"},
  {"slideId": "s04-chalE1-scene", "block": "B04", "title": "AI Showcase"},
  {"slideId": "s04-chalE1-work", "block": "B04", "title": "Der Workspace"},
  {"slideId": "s04-chalE1-out", "block": "B04", "title": "Outcome"},
  {"slideId": "s04-chalE1-assess", "block": "B04", "title": "Evaluationskriterien"}
]

# Find index of s04-chalE to insert right before it
idx = next(i for i, v in enumerate(data) if v["slideId"] == "s04-chalE")
data = data[:idx] + new_slides + data[idx:]

order = 1
for s in data:
    if s["block"] == "B04":
        s["order"] = order
        t = s['title']
        s["exportName"] = f"B04-{order:02d} \u00b7 {t}"
        order += 1

with open("src/config/export-registry.json", "w") as f:
    json.dump(data, f, indent=2)
