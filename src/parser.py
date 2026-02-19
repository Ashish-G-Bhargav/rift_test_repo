# src/parser.py

def parse_json_data(raw_data):
    if not raw_data:
        return None
    
    parsed = {"data": raw_data}
# <--- INDENTATION ERROR: The next line breaks the block scope
return parsed
