from pydantic import BaseModel

class BudgetInput(BaseModel):
    bedrooms: int
    bathrooms: int
    area_sqft: float
    property_type: str  # e.g., "Apartment", "Villa", etc.
    style: str          # e.g., "Modern", "Classic", etc.

class BudgetOutput(BaseModel):
    predicted_budget: float
