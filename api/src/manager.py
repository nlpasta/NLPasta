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

# depracated
def get_old_reviews(business_id, business_index, data, page):
    if business_id not in business_index:
        return []
    index = business_index[business_id]
    reviews = data[index]['reviews'][(page * 5):(page * 5 + 5)]
    return reviews


def robertsstuff(r_to_text):
    pass


def get_reviews_with_keyword(keyword, data_for_restaurant):
    # data_for_restaurant is a dictionary 
    relevant_reviews = []
    reviews = data_for_restaurant[index]['reviews'][(page * 5):(page * 5 + 5)] 
    for i in range(len(reviews)):
        review = reviews[i]
        for word in review["text"]:
            # identify match -- possibly using watson word similarity API 
            if word.lower() == keyword.lower(): 
                relevant_reviews.append(review) 
    return relevant_reviews

