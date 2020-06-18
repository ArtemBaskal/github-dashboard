export type Repo = {
    id: number,
    name: string,
    stargazers_count: number,
    updated_at: string,
    language: string | null,
    description: string,
    owner: Owner,
    contributors: Contributor[] | undefined,
    html_url: string,
    contributors_url: string,
}

export type Owner = {
    id: number,
    html_url: string,
    login: string,
    avatar_url: string,
}

export type Contributor = Owner & { contributions: number }
