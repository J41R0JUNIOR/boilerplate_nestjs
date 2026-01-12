export class ManagerResponseDto {
    id: number;
    name: string;
    phone: string;
    email: string;
    cpf: string;

    constructor(manager: any) {
        this.id = manager.id;
        this.name = manager.name;
        this.phone = manager.phone;
        this.email = manager.email;
        this.cpf = manager.cpf;
    }
}
