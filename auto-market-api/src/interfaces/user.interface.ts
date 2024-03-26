export interface User {
    userName: string,
    email: string,
    password: string,
    rol: 'administrador' | 'cliente',
}