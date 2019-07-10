from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route('/api/reviews', methods=['GET'])
def get_visitor():
    data = {
        'review': 'this product totally sucks lmaoooooo'
    }
    return jsonify(data)

port = int(os.getenv('PORT', 8080))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port, debug=True)

