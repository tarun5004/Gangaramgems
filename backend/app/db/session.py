# Import create_engine and Session from sqlmodel
# create_engine database connection banata hai.
# Session humein database ke saath transaction karne mein madad karta hai.
from sqlmodel import create_engine, Session

# Import settings
# Database URL lene ke liye settings import kar rahe hain.
from app.core.config import settings

# Create the database engine
# Ye engine actual connection pool manage karta hai.
# echo=True ka matlab hai ki SQL queries console mein print hongi (debugging ke liye).
engine = create_engine(settings.DATABASE_URL, echo=True)

# Dependency to get a database session
# Ye function har API request ke liye ek naya database session dega.
# "yield" ka use karte hain taaki request khatam hone par session close ho jaye.
def get_session():
    # Context manager ke saath session open karte hain.
    with Session(engine) as session:
        yield session
