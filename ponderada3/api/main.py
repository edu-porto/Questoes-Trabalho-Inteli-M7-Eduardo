import uvicorn
import catboost
import pandas as pd
import os
import pickle
from fastapi import FastAPI
from pydantic import BaseModel

model_file_path = os.path.join(os.path.dirname(__file__), "model7.pkl")

# loaded_model = joblib.load("model.pkl")
model = pickle.load(open(model_file_path, 'rb'))

app = FastAPI()

# Aqui é feito o modelo dos dados pro modelo
class InputData(BaseModel):
    subscribers : float
    video_views : int
    category: int	
    uploads : int
    Country : int
    channel_type : int
    video_views_rank : float
    country_rank : int
    channel_type_rank : float
    subscribers_for_last_30_days : int
    created_year : int
    created_month : int
    created_date : int
    Gross_tertiary_education_enrollment : float
    Population : int
    Unemployment_rate : float
    Urban_population : int
    Latitude : float
    Longitude : float

@app.get("/health")
async def health():
    message = "I'm healthy and running"
    return message

@app.get("/how-it-works")
async def how_to_use():
    category = {'Autos & Vehicles': 0, 'Comedy': 1, 'Education': 2, 'Entertainment': 3, 'Film & Animation': 4, 'Gaming': 5, 'Howto & Style': 6, 'Movies': 7, 'Music': 8, 'News & Politics': 9, 'Nonprofits & Activism': 10, 'People & Blogs': 11, 'Pets & Animals': 12, 'Science & Technology': 13, 'Shows': 14, 'Sports': 15, 'Trailers': 16, 'Travel & Events': 17, 'nan': 18};
    Country = {'Afghanistan': 0, 'Argentina': 1, 'Australia': 2, 'Bangladesh': 3, 'Barbados': 4, 'Brazil': 5, 'Canada': 6, 'Chile': 7, 'China': 8, 'Colombia': 9, 'Cuba': 10, 'Ecuador': 11, 'Egypt': 12, 'El Salvador': 13, 'Finland': 14, 'France': 15, 'Germany': 16, 'India': 17, 'Indonesia': 18, 'Iraq': 19, 'Italy': 20, 'Japan': 21, 'Jordan': 22, 'Kuwait': 23, 'Latvia': 24, 'Malaysia': 25, 'Mexico': 26, 'Morocco': 27, 'Netherlands': 28, 'Pakistan': 29, 'Peru': 30, 'Philippines': 31, 'Russia': 32, 'Samoa': 33, 'Saudi Arabia': 34, 'Singapore': 35, 'South Korea': 36, 'Spain': 37, 'Sweden': 38, 'Switzerland': 39, 'Thailand': 40, 'Turkey': 41, 'Ukraine': 42, 'United Arab Emirates': 43, 'United Kingdom': 44, 'United States': 45, 'Venezuela': 46, 'Vietnam': 47}
    channel_type ={'Animals': 0, 'Autos': 1, 'Comedy': 2, 'Education': 3, 'Entertainment': 4, 'Film': 5, 'Games': 6, 'Howto': 7, 'Music': 8, 'News': 9, 'Nonprofit': 10, 'People': 11, 'Sports': 12, 'Tech': 13, 'nan': 14}
    message = "In order to use the input we have the following dict : "

    return message,'category', category, 'Country', Country, 'channel type', channel_type

@app.post("/prediction/")
async def predict(data : InputData):
    # O input do modelo precisa ser um data frame  então irei criar um dict e depois o df 
    users_input_model = {
    'subscribers': [data.subscribers],
    'video views': [data.video_views],
    'category': [data.category],
    'uploads': [data.uploads],
    'Country': [data.Country],
    'channel_type': [data.channel_type],
    'video_views_rank': [data.video_views_rank],
    'country_rank': [data.country_rank],
    'channel_type_rank': [data.channel_type_rank],
    'subscribers_for_last_30_days': [data.subscribers_for_last_30_days],
    'created_year': [data.created_year],
    'created_month': [data.created_month],
    'created_date': [data.created_date],
    'Gross tertiary education enrollment (%)': [data.Gross_tertiary_education_enrollment],
    'Population': [data.Population],
    'Unemployment rate': [data.Unemployment_rate],
    'Urban_population': [data.Urban_population],
    'Latitude': [data.Latitude],
    'Longitude': [data.Longitude]}

    input_dict = pd.DataFrame(users_input_model)
    prediction = model.predict(input_dict)


    return {"prediction" : prediction.tolist()}
    
