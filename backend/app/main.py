# Import FastAPI class to create the app
# FastAPI class ko import kar rahe hain taaki hum apni app bana sakein.
from fastapi import FastAPI

# Import CORSMiddleware to allow frontend to talk to backend
# CORS (Cross-Origin Resource Sharing) allow karta hai ki React (port 5173) FastAPI (port 8000) se baat kar sake.
from fastapi.middleware.cors import CORSMiddleware

# Import settings from our config file
# Hamari settings (jaise project name) ko import kar rahe hain.
from app.core.config import settings

# Create the FastAPI application instance
# Ye hamari main application object hai.
app = FastAPI(
    title="Gangaram Gems API", # API ka naam
    version="1.0.0"            # API ka version
)

# Define allowed origins for CORS
# Kaunsi websites hamari API ko call kar sakti hain.
origins = [
    "http://localhost:5173", # React development server
    "http://localhost:3000", # Alternative React port
]

# Add CORS middleware to the app
# App mein CORS security rules add kar rahe hain.
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,      # Allowed websites list
    allow_credentials=True,     # Cookies allow karna
    allow_methods=["*"],        # Saare methods allow (GET, POST, PUT, DELETE)
    allow_headers=["*"],        # Saare headers allow
)

# Define a root endpoint
# Ek simple test route taaki hum check kar sakein ki API chal rahi hai.
@app.get("/")
def read_root():
    # Jab koi "/" par jayega, use ye message milega.
    return {"message": "Welcome to Gangaram Gems API"}

# Define the public config endpoint as requested
# Ye endpoint frontend ko public settings (jaise WhatsApp number) dega.
@app.get("/public-config")
def get_public_config():
    # Frontend ko WhatsApp number bhej rahe hain taaki wo "Buy Now" link bana sake.
    return {
        "whatsapp_number": settings.WHATSAPP_NUMBER
    }
