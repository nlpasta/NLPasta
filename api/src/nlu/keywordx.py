"""
Object for a keyword and related attributes
"""
class keywordx:
    def __init__(self, text, sentiment, relevance):
        self.text = text
        self.sentiment = sentiment
        self.relevance = relevance

    def __repr__(self):
        return self.text

    def __eq_(self, other):
        return other == self or other == self.txt