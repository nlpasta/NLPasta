from flask import Flask, jsonify
from flask_cors import CORS
import os
import manager

app = Flask(__name__)
CORS(app)

data = []

@app.route('/api/reviews', methods=['GET'])
def get_feedback():
    return jsonify(data)


if __name__ == '__main__':
    data = manager.load_data('src/data.json')
    port = int(os.getenv('PORT', 8080))
    app.run(host='0.0.0.0', port=port, debug=True)

