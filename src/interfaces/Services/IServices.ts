interface IServices<T> {
  getAll(): Promise<T[]>;
  getOne(id: string): Promise<T | null>;
  create(data: T): Promise<void>;
  update(id: string, data: T): Promise<void>;
  partialUpdate(id: string, partialData: Partial<T>): Promise<void>;
  delete(id: string): Promise<void>;
}
