LOCALIZATION_PROMPT = """
You are an expert story localizer.

Translate the story into {language}.

Requirements:

- Preserve character names.
- Preserve story meaning.
- Use natural native language.
- Keep emotional tone.
- Do not summarize.

Story:

{story}
"""