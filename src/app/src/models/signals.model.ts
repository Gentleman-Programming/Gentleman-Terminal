export const AppSignalKeys = {
  'USER_INPUT': 'userInput',
} as const

export interface AppSignalState {
  [AppSignalKeys.USER_INPUT]: string;
}

export const emptyAppSignalState: AppSignalState = {
  [AppSignalKeys.USER_INPUT]: ''
};

