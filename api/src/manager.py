import json


def load_data(file_name):
    with open(file_name) as json_file:
        return json.load(json_file)