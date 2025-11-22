# Import SQLModel components
# SQLModel humein Python classes ko database tables mein convert karne deta hai.
from typing import Optional, List
from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime

# Base model with common fields
# Ye base class nahi hai, bas hum models define kar rahe hain.

# -----------------------------------------------------------------------------
# User Model
# -----------------------------------------------------------------------------
class User(SQLModel, table=True):
    # table=True ka matlab hai ki is class ke liye database mein table banegi.
    __tablename__ = "users"

    # Primary Key: Unique ID for each user
    id: Optional[int] = Field(default=None, primary_key=True)
    
    # User details
    name: str
    email: str = Field(unique=True, index=True) # Email unique hona chahiye
    phone: str
    password_hash: str # Password ko kabhi plain text mein save nahi karte
    
    # Is this user an admin?
    is_admin: bool = Field(default=False)
    
    # Timestamps
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    # Relationships (Future use: orders, addresses)
    # Abhi ke liye simple rakhte hain.

# -----------------------------------------------------------------------------
# Gemstone Type Model (Category)
# -----------------------------------------------------------------------------
class GemstoneType(SQLModel, table=True):
    __tablename__ = "gemstone_types"

    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(unique=True) # e.g., "Blue Sapphire"
    slug: str = Field(unique=True) # URL friendly name e.g., "blue-sapphire"
    color: str # Primary color for filtering
    
    short_description: str
    long_description: Optional[str] = None
    
    hero_image_url: Optional[str] = None # Image for the category page
    is_active: bool = Field(default=True) # Soft delete / hide
    sort_order: int = Field(default=0) # Display order
    
    created_at: datetime = Field(default_factory=datetime.utcnow)

    # Relationship: One GemstoneType has many Products
    products: List["Product"] = Relationship(back_populates="gemstone_type")

# -----------------------------------------------------------------------------
# Product Model
# -----------------------------------------------------------------------------
class Product(SQLModel, table=True):
    __tablename__ = "products"

    id: Optional[int] = Field(default=None, primary_key=True)
    
    # Foreign Key: Link to GemstoneType
    gemstone_type_id: int = Field(foreign_key="gemstone_types.id")
    
    title: str
    slug: str = Field(unique=True)
    sku: str = Field(unique=True) # Stock Keeping Unit (Product Code)
    
    description: str
    
    # Physical attributes
    carat_weight: float
    shape: str
    origin: Optional[str] = None
    color: str
    
    # Pricing
    price: float
    discount_price: Optional[float] = None
    
    # Inventory
    stock_quantity: int = Field(default=1)
    is_active: bool = Field(default=True)
    
    created_at: datetime = Field(default_factory=datetime.utcnow)

    # Relationship: Product belongs to one GemstoneType
    gemstone_type: Optional[GemstoneType] = Relationship(back_populates="products")
    
    # Relationship: Product has many images
    images: List["ProductImage"] = Relationship(back_populates="product")

# -----------------------------------------------------------------------------
# Product Image Model
# -----------------------------------------------------------------------------
class ProductImage(SQLModel, table=True):
    __tablename__ = "product_images"

    id: Optional[int] = Field(default=None, primary_key=True)
    product_id: int = Field(foreign_key="products.id")
    
    image_url: str
    is_primary: bool = Field(default=False) # Main image for listing
    sort_order: int = Field(default=0)
    
    product: Optional[Product] = Relationship(back_populates="images")
