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


def get_reviews(business_id, business_index, data, page):
    if business_id not in business_index:
        return []
    index = business_index[business_id]
    reviews = data[index]['reviews'][(page * 5):(page * 5 + 5)]
    return reviews


# Deprecated
def get_old_reviews(business_id, business_index, data, page):
    if business_id not in business_index:
        return []
    index = business_index[business_id]
    reviews = data[index]['reviews'][(page * 5):(page * 5 + 5)]
    return reviews


def map_reviews_to_text(data):
    mapped = []
    for business in data:
        review_map = {}
        for review in business['reviews']:
            review_id = review['review_id']
            review_map[review_id] = review['text']
        mapped.append(review_map)
    return mapped


def robertsstuff(r_to_text):
    pass


def get_reviews_with_keyword(keyword, data):
    pass

