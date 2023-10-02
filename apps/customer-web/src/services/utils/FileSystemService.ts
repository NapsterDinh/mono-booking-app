import { promises as fs } from 'fs';

export class FileSystemService {
  public static async isFolderExists(path: string): Promise<boolean> {
    try {
      await fs.stat(path);
      return true;
    } catch (error) {
      return false;
    }
  }

  public static getFile = async (path: string, encoding?: BufferEncoding): Promise<boolean | object | string> => {
    try {
      return await fs.readFile(path, {
        encoding: encoding || 'utf-8',
      });
    } catch (error) {
      return false;
    }
  };

  public static makeDir = async (path: string): Promise<void> => {
    try {
      return await fs.mkdir(path);
    } catch (error) {}
  };

  public static writeFile = async (path: string, content: any): Promise<void> => {
    try {
      fs.writeFile(path, JSON.stringify(content));
    } catch (error) {}
  };

  public static deleteFile = async (path: string): Promise<void> => {
    try {
      fs.unlink(path);
    } catch (error) {}
  };
}
