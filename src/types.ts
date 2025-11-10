// src/types.ts

export interface Post {
  id: number;
  title: string;
  content: string;
  date: string; // 작성일
}

// 폼 입력에 사용될 타입 (ID는 제외)
export type NewPost = Omit<Post, 'id' | 'date'>;