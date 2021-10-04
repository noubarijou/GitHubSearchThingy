class GitHub {
    constructor(){
        this.client_id = '58ef5cf6b435fc572ad2';
        this.client_secret = '92fb1684eaf3776efe09d080f0a1f7014fb30628';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}