from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/api/reviews', methods=['GET'])
def get_visitor():
    data = {
        'review': 'this product totally sucks lmaoooooo'
    }
    data = [
        {
            'review_id': 'Q1sbwvVQXV2734tPgoKj4Q',
            'user_id':'hG7b0MtEbXx5QzbzE6C_VA',
            'business_id':'ujmEBvifdJM6h6RLv4wQIg',
            'stars':1,
            'useful':6,
            'funny':1,
            'cool':0,
            'text':'Total bill for this horrible service? Over $8Gs. These crooks actually had the nerve to charge us $69 for 3 pills. I checked online the pills can be had for 19 cents EACH! Avoid Hospital ERs at all costs.',
            'date':'2013-05-07 04:34:36'
        }
    ]
    return jsonify(data)


port = int(os.getenv('PORT', 8080))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port, debug=True)

