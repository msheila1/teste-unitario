import { TestBed } from "@angular/core/testing";
import { userNamePasswordValidator } from "src/app/home/sign-up/username-password.validator";
import { TokenService } from "../token/token.service";
import { UserService } from "./user.service"

describe("O serviço userServices", ()=>{

    let service: UserService;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers:[UserService]
        });
        service = TestBed.get(UserService);
    });

    it("deve ser instanciado", () => {
        const tokenService = new TokenService()
        expect(service).toBeTruthy();
    });

    it("deve através de uma token, recupera as informações do usuário", () =>{
        const token = 
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwODMwMjU1NCwiZXhwIjoxNjA4Mzg4OTU0fQ.rb_5y3EJfxyKFpBEvp32bHsGCJGEjsZCbO6Z_M_h0mI';
        service.setToken(token);
        expect(service.isLogged()).toBeTruthy();
        expect(service.getUserName()).toBeTruthy("flavio");
        service.getUser().subscribe(user =>{
            expect(user.name).toBe("flavio");
        });
    });

    it('deve limpar as informações no logout', () =>{
        const token = 
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwODMwMjU1NCwiZXhwIjoxNjA4Mzg4OTU0fQ.rb_5y3EJfxyKFpBEvp32bHsGCJGEjsZCbO6Z_M_h0mI';
        service.setToken(token);
        service.logout();
        expect(service.logout()).toBeFalsy();
        expect(service.getUserName()).toBe("");
    });
});