interface IServices<T> {
  getAll(): Promise<T[]>;
  getOne(id: string): Promise<T | null>;
  create(data: T): Promise<IResponseDefault>;
  update(id: string, data: T): Promise<IResponseDefault>;
  partialUpdate(id: string, partialData: Partial<T>): Promise<void>;
  delete(id: string): Promise<void>;
}
