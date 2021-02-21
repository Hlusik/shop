export interface ConfigModel {
    id?: string;
    login?: string;
    email?: string;
}

export class User implements ConfigModel {
    id?: string;
    login?: string;
    email?: string;
    constructor(user: User) {
        this.id = user.id || `f${(~~(Math.random()*1e8)).toString(16)}`;
        this.login = user.login || 'default-user';
        this.email = user.email || 'default-email@gmail.com';
    }
}

