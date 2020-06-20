export type Repo = {
    id: number,
    name: string,
    stargazers_count: number,
    updated_at: string,
    description: string,
    owner: Owner,
    html_url: string,
    contributors_url: string,
    contributors: Contributor[] | undefined,
    languages_url: string,
    languages: string[] | undefined,
}

export type Owner = {
    id: number,
    html_url: string,
    login: string,
    avatar_url: string,
}

export type Contributor = Owner & { contributions: number }
