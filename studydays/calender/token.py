from asyncio import exceptions
import jwt,datetime

def decode_access_token(token):
        payload = jwt.decode(token, 'secret', algorithms = 'HS256')
        return payload['id']