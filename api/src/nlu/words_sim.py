import requests 
import json


def find_keyword_similarity(text1, text2): 
		
	parameters = {"text1":keyword, "text2":word_in_review}
	#response = requests.get("https://twinword-text-similarity-v1.p.rapidapi.com/similarity/?text1={a}&text2={p}",
	response = requests.get("https://twinword-text-similarity-v1.p.rapidapi.com/similarity/", parameters, 
		headers={
			"Content-Type": "application/json",
	    	"X-RapidAPI-Host": "twinword-text-similarity-v1.p.rapidapi.com",
	    	"X-RapidAPI-Key": "4a8141d645msh516ec0f63badd57p1d26bfjsna87088d14baf",
	    	
	  	}
	)
	print(response.json())
	return response["similarity"]



	