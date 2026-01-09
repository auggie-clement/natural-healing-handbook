export interface Author {
  name: string;
  role: string;
  imageUrl?: string;
}

export interface ArticleMeta {
  updatedDate: string;
  author: Author;
}