export interface IPCResponse<T> {
  isSuccess: boolean;
  error?: any;
  output: T;
}

declare global {
  interface Window {
    electron: {
      on: (
        channel: string,
        listener: (event: any, args: string) => void
      ) => Promise<IPCResponse<null>>;
      invoke: <T>(channel: string, ...args: any[]) => Promise<T>;
    };
  }
}

export const { on, invoke } = window.electron;

export interface IMessageData {
  cmd: string;
  input?: any;
}
