import { decorate, inject, injectable } from "inversify";

/** Information about the loading state of a component. */
export interface IComponentLoadStatus {
  isLoaded: boolean;
  componentName: string;
}

export interface IComponent {
  load(): Promise<IComponentLoadStatus>;
  onReady(): void;
  onShow(): void;
}

/**
 * Represents an application component that would need to get loaded dynamically at runtime.
 */
@injectable()
export abstract class Component implements IComponent {

  private initializationPromise!: Promise<any>;

  constructor() {
    //console.log("[Component] created");
  }

  load(): Promise<IComponentLoadStatus> {
    // console.log("[Component] loading");

    if (this.initializationPromise) {
      return this.initializationPromise;
    }

    // TODO: Support dynamic loading of child components.  Find any child component, and load those as well, chaining their promises onto this return.
    //      Each child component will also look for child components.

    return new Promise<IComponentLoadStatus>((resolve, reject) => {
      this.onReady();

      resolve(<IComponentLoadStatus>{ isLoaded: true });
    });
  }

  onReady() {
    console.log("[Component] ready");
  }

  onShow(): void {
    // to be overridden in subclasses
  }
}
