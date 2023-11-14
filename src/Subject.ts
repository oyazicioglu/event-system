import { IObservable, Subscriber } from "./IObservable.js";
import { UUID } from "./UUID.js";

export class Obserbable<T> implements IObservable<T> {
  private subscribers: Subscriber<T>[] = [];

  subscribe(callback: (data: T) => void) {
    const newSubscriber: Subscriber<T> = {
      callback,
      id: UUID.create(),
    };

    this.subscribers.push(newSubscriber);
    return newSubscriber;
  }

  notify(data: T) {
    this.subscribers.forEach((cb) => {
      cb.callback(data);
    });
  }

  unsubscribe(id: string) {
    this.subscribers = this.subscribers.filter((s) => s.id !== id);
    return this;
  }

  unsubscribeAll() {
    this.subscribers = [];
  }
}
