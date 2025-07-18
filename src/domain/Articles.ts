class Articles {
  constructor(
    public rendered_body: string,
    public body: string,
    public coediting: boolean,
    public comments_count: number,
    public created_at: string,
    public group: {
      created_at: string;
      description: string;
      name: string;
      private: boolean;
      updated_at: string;
      url_name: string;
    },
    public id: string,
    public likes_count: number,
    public private_mode: boolean,
    public reactions_count: number,
    public stocks_count: number,
    public tags: [
      {
        name: string;
        versions: string[];
      }
    ],
    title: string,
    updated_at: string,
    url: string,
    user: {
      description: string;
      facebook_id: string;
      followees_count: number;
      followers_count: number;
      github_login_name: string;
      id: string;
      items_count: number;
      linkedin_id: string;
      location: string;
      name: string;
      organization: string;
      permanent_id: number;
      profile_image_url: string;
      team_only: boolean;
      twitter_screen_name: string;
      website_url: string;
    },
    page_views_count: number,
    team_membership: {
      name: string;
    },
    organization_url_name: string,
    slide: boolean
  ) {}
}

export default Articles;
