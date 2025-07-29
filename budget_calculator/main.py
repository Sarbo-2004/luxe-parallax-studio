from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import pickle
import xgboost as xgb
import numpy as np

# Load the trained XGBoost model
with open("xgb_model.pkl", "rb") as f:
    model = pickle.load(f)

app = FastAPI()

# Allow CORS for your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set your React app URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model for incoming request
class BudgetRequest(BaseModel):
    area_sqft: int
    num_rooms: int
    space_type: str
    style: str
    material: str
    add_3d: int
    add_turnkey: int
    add_smart_home: int

@app.get("/")
def root():
    return {"message": "Interior Budget Calculator API"}

@app.post("/predict")
def predict_cost(data: BudgetRequest):
    try:
        # Convert input to DataFrame
        input_df = pd.DataFrame([data.dict()])

        # Optional: Log input for debugging
        print("Received input:")
        print(input_df)

        # Check for NaNs
        if input_df.isnull().values.any():
            raise ValueError("Input contains NaN values.")

        # Predict log cost
        log_pred = model.predict(input_df)[0]

        # Convert from log to actual
        actual_pred = np.expm1(log_pred)  # Change to np.exp if needed

        return {"predicted_cost": round(float(actual_pred), 2)}

    except Exception as e:
        print("Error during prediction:", e)
        raise HTTPException(status_code=500, detail=str(e))

