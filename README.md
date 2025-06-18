Here How it Works

1. Prepare Your Dataset
   
Format your dataset similar to data.csv.
Typically it should contain input-output pairs (like question, answer).

2.Train the Chatbot

Open and run FinalCHATBOT.ipynb in Jupyter Notebook or Google Collab.
use the dataset to train a transformer-based chatbot model.
After running, it will automatically download a folder named chatbot/ in your file manager.
This folder will include files like:
model.safetensors
tokenizer_config.json
special_tokens_map.json
and other tokenizer/model config files.

3.Folder Structure in vs code

├── chatbot/                  # Contains the tokenizer and model files which was downloaded after running that ipynb file
├── static/                   # Static files (CSS/JS if any)
├── templates/                # HTML templates for the Flask app              
├── main.py                   # Flask backend to serve chatbot
├── .gitignore
├── venv/                     # Virtual environment (ignored by Git)


4.Requirements
Install the following Python libraries:
pip install flask transformers torch


5.Setup for Deployment
Run the Flask app with:
python main.py
This will start a local server at:
http://127.0.0.1:5000
Visit the link in your browser to interact with the chatbot through the frontend UI.

