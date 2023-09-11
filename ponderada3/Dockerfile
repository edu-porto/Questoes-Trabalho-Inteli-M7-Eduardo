# Use an official Python runtime as a parent image
FROM python:3.10

# Set the working directory to /app
WORKDIR /app

# Copy the contents of the "ponderada3" directory into the /app directory in the container
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install -r /app/api/requirements.txt

# Expose port 80 for the FastAPI server
EXPOSE 80

# Define the command to run your FastAPI server
CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "80"]
