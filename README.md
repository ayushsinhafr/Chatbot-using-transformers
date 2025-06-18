# 🤖 Transformer Chatbot - Simple Local Deployment

Build your own chatbot using Transformers and serve it via Flask!  
Train it with custom Q&A data and interact through a sleek web interface.

---

## 🚀 How It Works

### 1️⃣ Prepare Your Dataset

Make sure your dataset is in a format like `data.csv`, typically containing input-output pairs such as:

```
Question,Answer
"Hello","Hi! How can I help you?"
"What's your name?","I'm a chatbot built using Transformers!"
...
```

---

### 2️⃣ Train the Chatbot

- Open `FinalCHATBOT.ipynb` using **Jupyter Notebook** or **Google Colab**.
- Load and train the model using your dataset.
- After training completes, a `chatbot/` folder will be generated automatically, containing:

```
📁 chatbot/
├── model.safetensors
├── tokenizer_config.json
├── special_tokens_map.json
└── other tokenizer/model config files...
```

---

### 3️⃣ Project Folder Structure

```
📦 your-project/
├── chatbot/          # Trained model and tokenizer files
├── static/           # Static assets (CSS/JS)
├── templates/        # HTML templates for Flask frontend
├── main.py           # Flask backend server
├── .gitignore
├── venv/             # Python virtual environment
```

---

### 4️⃣ 🔧 Requirements

Install the required dependencies:

```bash
pip install flask transformers torch
```

---

### 5️⃣ 🛠️ Run the App

Start the local Flask server:

```bash
python main.py
```

Your chatbot will be live at:

```
🌐 http://127.0.0.1:5000
```

Open it in your browser and start chatting with your AI assistant!

---

> 💡 Tip: Customize the UI inside the `templates/` folder to make your chatbot look even cooler!
