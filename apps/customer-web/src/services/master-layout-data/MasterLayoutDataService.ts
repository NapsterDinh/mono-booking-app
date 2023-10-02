import { serverGlobalConfig as cfg } from '@customer-web/configs/env';
import { isServer } from '@customer-web/configs/server';
import { GlobalPageService } from '@customer-web/page-providers/GlobalPageService';
import { fetchBlacklist } from '@customer-web/request-providers/customer';
import { fetchMasterLayout } from '@customer-web/request-providers/estore';
import { FileSystemService } from '@customer-web/services/utils/FileSystemService';
import dayjs from 'dayjs';
import path from 'path';

export type TMasterLayoutData = {
  expiryTime: string;
  header: Header | null;
  footer: Footer | null;
  menu?: Menu[];
  blacklist?: string[];
};

/**
 * fs ref: https://nodejs.org/docs/latest-v16.x/api/fs.html#fs_fs_existssync_path
 */
export class MasterLayoutDataService {
  public readonly MLD_PUBLIC_FOLDER_PREFIX = 'public';
  public readonly MLD_CACHE_FOLDER_PREFIX = 'cache';
  public readonly MLD_FILE_NAME = 'master-layout.json';

  /**
   * Get Master Layout Data root folder path
   */
  public getRootFolderPath = () => {
    const afterRootPath = path.join(this.MLD_PUBLIC_FOLDER_PREFIX, this.MLD_CACHE_FOLDER_PREFIX);
    if (isServer) {
      return path.join(cfg.ROOT_PROJECT, afterRootPath);
    }

    return path.join(__dirname, afterRootPath);
  };

  /**
   * Get Master Layout Data file path (ex: a/b/c/d.ext)
   */
  public getFilePath = () => {
    const afterRootPath = path.join(this.MLD_PUBLIC_FOLDER_PREFIX, this.MLD_CACHE_FOLDER_PREFIX, this.MLD_FILE_NAME);
    if (isServer) {
      return path.join(cfg.ROOT_PROJECT, afterRootPath);
    }

    return path.join(__dirname, afterRootPath);
  };

  public getMasterLayoutCachedData = async () => {
    const rootFolderPath = this.getRootFolderPath();
    // Check if folder is not exists, init it
    if (!(await FileSystemService.isFolderExists(rootFolderPath))) {
      await FileSystemService.makeDir(rootFolderPath);
    }

    let masterLayoutDataFile: string | boolean | object;
    if (isServer) {
      masterLayoutDataFile = JSON.parse((await FileSystemService.getFile(this.getFilePath())) as string);
    } else {
      masterLayoutDataFile = await fetchMasterLayout();
    }
    if (!masterLayoutDataFile) {
      const globalService = new GlobalPageService();
      const { header, footer, menu } = await globalService.getMasterLayout();
      const mld = {
        // expiryTime: moment(new Date()).add(24, 'hours').toDate(),
        expiryTime: dayjs(new Date()).add(24, 'hours').toJSON(),
        header,
        footer,
        menu,
      } as TMasterLayoutData;
      mld.blacklist = [];

      try {
        mld.blacklist = await fetchBlacklist();
      } catch (error) { }

      // console.log('🗽: Make new MLD-caching file ', mld);
      await FileSystemService.writeFile(this.getFilePath(), mld);
      return mld;
    }

    return masterLayoutDataFile as TMasterLayoutData;
  };

  public clearMasterLayoutCachedData = async () => {
    await FileSystemService.deleteFile(this.getFilePath());
  };
}

export const getMasterLayoutDataFromChildren = (children?: React.ReactNode | any): TMasterLayoutData | undefined => {
  if (!children) {
    return undefined;
  }

  if (!children?.props && (!children?.props?.header || !children?.props?.footer || !children?.props?.menu)) {
    return undefined;
  }

  const { header, footer, menu } = (children?.props as TMasterLayoutData) || {
    header: null,
    footer: null,
    menu: [],
  };

  return {
    header,
    footer,
    menu,
  } as TMasterLayoutData;
};
