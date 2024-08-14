export interface IElectronAPI {
  update: () => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
