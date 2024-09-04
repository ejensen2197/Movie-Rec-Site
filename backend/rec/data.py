import requests
from .config import TMDB_API_KEY

api_key = TMDB_API_KEY
response = requests.get(f'https://api.themoviedb.org/3/movie/popular?api_key={api_key}')
data = response.json()

print(data)