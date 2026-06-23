ANALYSIS_PROMPT = """
Analyze the story below.

Return ONLY valid JSON.

Schema:

{{
  "characters": [],
  "locations": [],
  "themes": [],
  "genre": ""
}}

Story:

{story}
"""