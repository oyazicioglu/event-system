export interface IObservable<T> {
  subscribe(callback: (data: T) => void): Subscriber<T>;
  notify(data: T): void;
  unsubscribe(id: string): void;
  unsubscribeAll(): void;
}

export type Subscriber<T> = {
  callback: (data: T) => void;
  id: string;
};
