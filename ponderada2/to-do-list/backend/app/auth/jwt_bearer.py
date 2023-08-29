# A função desse script é checar a autenticidade das requisições 

from typing import Optional
from fastapi import Request, HTTPException
from fastapi.security import HTTPBearer
from fastapi.security.http import HTTPAuthorizationCredentials
from .jwt_handler import decodeJWT

# Sub classe do fast api http, fazendo autenticação nas rotas
class jwtBearer(HTTPBearer):
    def __init__(self,  auto_Error: bool = True):
        super(jwtBearer, self).__init__(auto_error=auto_Error)

    async def __call__(self, request: Request):
        credentials : HTTPAuthorizationCredentials = await super(jwtBearer, self).__call__(request)
        if credentials:
            if not credentials.schema == "Bearer":
                raise HTTPException(status_code=403, detail="Token inválido ou expirado")
            return credentials.credentials
        else:
            raise HTTPException(status_code=403, detail="Token inválido ou expirado")
    
    # Nessa função vamos validar se um token é válido ou não    
    def verify_jwt(self, jwtoken : str):
        isTokenValid : bool = False
        payload = decodeJWT(jwtoken)
        if payload:
            isTokenValid = True
        return isTokenValid