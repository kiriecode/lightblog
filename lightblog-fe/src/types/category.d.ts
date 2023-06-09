export interface CategoryFamily {
  parent: ViewCategory;
  children: ViewCategory[];
}

export interface newCategory {
  categoryName: string;
  categoryAliasName: string;
  description?: string;
  parentId?: number;
}

export interface updateCategory {
  categoryId: number;
  categoryName: string;
  categoryAliasName: string;
  description?: string;
  parentId?: number;
}

export interface ViewCategory {
  categoryId: number;
  categoryName: string;
  categoryAliasName: string;
  description: string;
  parentId: number;
  createTime: string;
}

export interface CategoryState {
  categorys: ViewCategory[];
  currentCategoryId: number;
}

export interface Category {
  categoryId: number;
  categoryName: string;
  categoryAliasName: string;
  description: string;
  parentId: number;
  createTime: string;
}