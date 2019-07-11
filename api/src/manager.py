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
        businesses.append(business)
    return businesses


def map_id_to_index(businesses):
    map = {}
    index = 0
    for business in businesses:
        map[business['business_id']] = index
        index += 1
    return map


def get_reviews(id, business_index, data, page):
    if id not in business_index:
        return []
    index = business_index[id]
    reviews = data[index]['reviews'][(page * 5):(page * 5 + 5)]
    return reviews

