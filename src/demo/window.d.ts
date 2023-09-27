import type { TServer } from 'api/_mocks/mirage.interface';

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    mirage: TServer;
  }
}
