export interface ISubject<T> {
    Subscribe(callback: (data: T) => void): void;
    Notify(data: T): void;
    UnSubscribe(): void;
}



export interface Subscriber<T> {
    callback: (data: T) => void;
}
