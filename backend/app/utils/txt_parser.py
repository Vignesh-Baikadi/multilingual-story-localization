def extract_text_from_txt(file_path: str) -> str:
    """
    Extract text from txt file.
    """

    with open(
        file_path,
        "r",
        encoding="utf-8"
    ) as file:
        return file.read()