"""
Object for a keyword and related attributes
"""
class keywordx:
    def __init__(self, text, sentiment, relevance, review_text=None):
        self.text = text
        self.sentiment = sentiment
        self.relevance = relevance
        self.pos = None
        self.lemma = None
        self.review_text = review_text

    def __repr__(self):
        return self.text