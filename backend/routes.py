from flask import Blueprint, request,jsonify

main = Blueprint('main', __name__)

@main.route('/', methods=['GET'])
def get_data():
    data = {"message": "Hello from Flask!"}
    return jsonify(data)

# @main.route('/api/send-data', methods=['POST'])
# def send_data():
#     data = request.json
#     #jsonify??
#     return response