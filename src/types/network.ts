export type Loadable<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'ready', value: T }
  | { status: 'reloading', value: T }
  | { status: 'error', error?: Error };
