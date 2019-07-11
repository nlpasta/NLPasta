from flask import Flask, jsonify
from flask_cors import CORS
import os
import manager

app = Flask(__name__)
CORS(app)

data = []
businesses = []
business_index = {}


@app.route('/api/businesses', methods=['GET'])
def get_businesses():
    return jsonify(businesses)


@app.route('/api/business/<id>/reviews', methods=['GET'])
def get_reviews(id):
    return jsonify(manager.get_reviews(id, business_index, data))


if __name__ == '__main__':
    data = manager.load_data('src/data.json')
    businesses = manager.get_businesses(data)
    business_index = manager.map_id_to_index(businesses)
    port = int(os.getenv('PORT', 8080))
    app.run(host='0.0.0.0', port=port, debug=True)

