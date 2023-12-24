export enum AppSignalKeys {
  'USER_INPUT' = 'userInput',
}

export interface AppSignalState {
  [AppSignalKeys.USER_INPUT]: string;
}

export const emptyAppSignalState: AppSignalState = {
  [AppSignalKeys.USER_INPUT]: '',
};
