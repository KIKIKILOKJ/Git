export class User {
    constructor( public username:string, public userData: any, public repo:any, public search:boolean ){
        this.username = username, this.userData = userData , this.repo = repo, this.search = false
    }
}
