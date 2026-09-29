export type NoticeCategory = "notice" | "disclosure";

export type Notice = {
  id: string;
  category: NoticeCategory;
  title: string;
  content: string;
  publishedAt: string;
  attachment?: string | null;
  pinned?: boolean;
};

export type Program = {
  id: string;
  order: number;
  title: string;
  description: string;
};
