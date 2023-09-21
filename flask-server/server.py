from flask import Flask,request,jsonify
from flask_cors import CORS
from ctransformers import AutoModelForCausalLM
from elevenlabs import generate, save, voices
from elevenlabs import set_api_key
import os
from dotenv import load_dotenv, find_dotenv


load_dotenv(find_dotenv())
set_api_key(os.getenv("ELEVENLABS_API_KEY"))

llm = AutoModelForCausalLM.from_pretrained("path\\to\llama-2-7b-chat.ggmlv3.q8_0.bin", model_type="llama", max_new_tokens=512)

app = Flask(__name__)
CORS(app) 

def text_pretreatment (text):
    last_period_index = text.rfind('.')
    extracted_text = text[:last_period_index]
    return extracted_text


@app.route("/story", methods=["POST"])
def story():
    prompt = request.get_json()['inputData']
    story = llm(f"System: You are a historical assistant, your role is to tell stories in 12 coherent sentences Q: Can you provide a detailed narrative of {prompt}? A:")
    audio = generate(
                    text = text_pretreatment(story),
                    voice = "Adam",
                    model = 'eleven_multilingual_v1',
                    )
    
    audio_path = "path/to/assets/audio.mp3"
    save(audio,audio_path)
    response_data = {
        "message": text_pretreatment(story)
    }
    

    return jsonify(response_data)




if __name__ == "__main__":
    app.run(debug=True)

