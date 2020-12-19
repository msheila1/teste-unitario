import { serialize } from "v8";
import { TokenService } from "./token.service"

describe('O serviço TokenService', () =>{
    let token;
    let service; 

    it('deve ser instanciado', () =>{
        const service = new TokenService();
        expect(service).toBeTruthy()
    });

    it('deve guardar o token', () => {
        service.setToken(token);
        expect(service.hasToken()).toBeTruthy();
        expect(service.getToken()).toBe("testeToken");
    });

    it('deve remove um token', () =>{
        service.setToken(token);
        service.removeToken();
        expect(service.hasToken()).toBeFalsy();
        expect(service.getToken()).toBeFalsy();
    })

    afterEach(()=> {
        localStorage.clear()
    }); 

    beforeEach(() => {
        token = 'testeToken';
        service = new TokenService()
    })
})