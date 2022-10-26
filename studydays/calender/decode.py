from asyncio import exceptions
import jwt, datetime


def decode_access_token(token):
        
        payload = jwt.decode(token, 'access_secret', algorithms = 'HS256')
        return payload['user_id']