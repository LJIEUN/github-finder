class Github {
    constructor(){
        this.client_id = 'Ov23lioUiEGxdVAbYBGo'
        this.client_secret = 'c0b52b9c082c86b751ab9b4a7765de6c5a289c38'
        this.repos_count = 5;
        this.repos_sort = 'created : asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}
            ?client_id=${this.client_id}&this.client_secret=${this.client_secret}`
        );

    const repoResponse = await fetch(
        `https://api.github.com/users/${user}/repos
        ?per_page=${this.repos_count}$sort=${this.repos_sort}
        &client_id=${this.client_id}
        &client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
        profile,
        repos
    }


    }


}