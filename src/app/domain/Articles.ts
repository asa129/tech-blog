export interface Articles {
  created_at: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  content: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  tags: string[];
  writer: string | null;
  url: string | null;
  imageUrl: string | null;
}
