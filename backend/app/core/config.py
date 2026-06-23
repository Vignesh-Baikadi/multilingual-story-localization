from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    
    # Centralized application configuration.
    # Loads values from .env automatically.
    DATABASE_URL: str
    GEMINI_API_KEY: str
    SECRET_KEY: str

    class Config:
        env_file = ".env"


settings = Settings()