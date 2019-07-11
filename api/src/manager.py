import json


def load_data(file_name):
    with open(file_name) as json_file:
        return json.load(json_file)


def get_businesses(data):
    businesses = []
    for entry in data:
        business = {}
        for key, value in entry.items():
            if key == 'reviews':
                continue
            business[key] = value

        # if 'reviews' in business:
        #     business.pop('reviews')
            # del business['reviews']
        businesses.append(business)
    # businesses = {}
    # for key in data.keys
    return businesses


def map_id_to_index(businesses):
    map = {}
    index = 0
    for business in businesses:
        map[business['business_id']] = index
        index += 1
    return map


def get_reviews(id, business_index, data):
    if id not in business_index:
        return []
    index = business_index[id]
    reviews = data[index]['reviews']
    return reviews

