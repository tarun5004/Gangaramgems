# Import BaseSettings from pydantic-settings
# Pydantic settings humein environment variables ko validate aur load karne mein madad karta hai.
from pydantic_settings import BaseSettings

# Define a Settings class
# Ye class hamari saari configuration values ko hold karegi.
class Settings(BaseSettings):
    # Database URL definition
    # Database se connect karne ke liye connection string.
    DATABASE_URL: str
    
    # Secret key for JWT
    # Security key jo tokens banane mein use hoti hai.
    SECRET_KEY: str
    
    # Algorithm for JWT
    # Encryption algorithm.
    ALGORITHM: str = "HS256"
    
    # Token expiration
    # Token ki validity time.
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # WhatsApp Number
    # Public configuration ke liye WhatsApp number.
    WHATSAPP_NUMBER: str

    # AWS Configuration
    AWS_ACCESS_KEY_ID: str
    AWS_SECRET_ACCESS_KEY: str
    AWS_REGION: str
    AWS_BUCKET_NAME: str

    # Configuration class to tell Pydantic where to find the .env file
    # Ye batata hai ki values ".env" file se padhni hain.
    class Config:
        env_file = ".env"
        extra = "ignore" # Ignore extra fields in .env if any


# Create an instance of Settings
# Is object ko hum poori app mein use karenge settings access karne ke liye.
settings = Settings()
