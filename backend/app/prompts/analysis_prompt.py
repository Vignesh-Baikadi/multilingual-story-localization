ANALYSIS_PROMPT = """
You are an AI story analysis assistant.

Analyze the story below.

Return ONLY valid JSON.

Do NOT include markdown.
Do NOT include explanations.
Do NOT wrap the response inside ```json.
Do NOT omit any field.
If a field has no value, use an empty string "" or an empty array [].

Return exactly this schema:

{{
  "title": "",
  "genre": "",
  "summary": "",
  "characters": [],
  "locations": [],
  "themes": [],
  "sentiment": "",
  "reading_level": "",
  "target_audience": "",
  "keywords": [],
  "writing_style": "",
  "story_length": "",
  "estimated_reading_time": ""
}}

Story:

{story}
"""