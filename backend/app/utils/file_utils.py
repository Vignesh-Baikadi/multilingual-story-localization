import uuid
import os


def generate_unique_filename(original_filename: str) -> str:
    # Generates a unique filename so uploaded files
    # never overwrite each other.

    extension = os.path.splitext(original_filename)[1]

    return f"{uuid.uuid4()}{extension}"