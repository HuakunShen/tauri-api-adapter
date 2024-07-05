// export * as path from '@tauri-apps/api/path'
import { type Remote } from '@huakunshen/comlink'
import {
  appCacheDir,
  appConfigDir,
  appDataDir,
  appLocalDataDir,
  appLogDir,
  audioDir,
  BaseDirectory,
  basename,
  cacheDir,
  configDir,
  dataDir,
  delimiter,
  desktopDir,
  dirname,
  documentDir,
  downloadDir,
  executableDir,
  extname,
  fontDir,
  homeDir,
  isAbsolute,
  join,
  localDataDir,
  normalize,
  pictureDir,
  publicDir,
  resolve,
  resolveResource,
  resourceDir,
  runtimeDir,
  sep,
  tempDir,
  templateDir,
  videoDir
} from '@tauri-apps/api/path'
import { getDefaultClientAPI, isMain } from '../client'
import { type IPath } from './client-types'
import { type IPathServer } from './server-types'

export function constructAPI(api: Remote<IPathServer>): IPath {
  return {
    appCacheDir: api.pathAppCacheDir,
    // appCacheDir: () => Promise.resolve('appCacheDir'),
    appConfigDir: api.pathAppConfigDir,
    appDataDir: api.pathAppDataDir,
    appLocalDataDir: api.pathAppLocalDataDir,
    appLogDir: api.pathAppLogDir,
    audioDir: api.pathAudioDir,
    BaseDirectory: BaseDirectory,
    basename: api.pathBasename,
    cacheDir: api.pathCacheDir,
    configDir: api.pathConfigDir,
    dataDir: api.pathDataDir,
    delimiter: api.pathDelimiter,
    desktopDir: api.pathDesktopDir,
    dirname: api.pathDirname,
    documentDir: api.pathDocumentDir,
    downloadDir: api.pathDownloadDir,
    executableDir: api.pathExecutableDir,
    extname: api.pathExtname,
    fontDir: api.pathFontDir,
    homeDir: api.pathHomeDir,
    isAbsolute: api.pathIsAbsolute,
    join: api.pathJoin,
    localDataDir: api.pathLocalDataDir,
    normalize: api.pathNormalize,
    pictureDir: api.pathPictureDir,
    publicDir: api.pathPublicDir,
    resolve: api.pathResolve,
    resolveResource: api.pathResolveResource,
    resourceDir: api.pathResourceDir,
    runtimeDir: api.pathRuntimeDir,
    sep: api.pathSep,
    tempDir: api.pathTempDir,
    templateDir: api.pathTemplateDir,
    videoDir: api.pathVideoDir
  }
}
const defaultClientAPI = getDefaultClientAPI<IPathServer>()
export const comlinkPath: IPath = constructAPI(defaultClientAPI)

export const nativePath: IPath = {
  appCacheDir,
  appConfigDir,
  appDataDir,
  appLocalDataDir,
  appLogDir,
  audioDir,
  BaseDirectory,
  basename,
  cacheDir,
  configDir,
  dataDir,
  delimiter: () => Promise.resolve(delimiter()),
  desktopDir,
  dirname,
  documentDir,
  downloadDir,
  executableDir,
  extname,
  fontDir,
  homeDir,
  isAbsolute,
  join,
  localDataDir,
  normalize,
  pictureDir,
  publicDir,
  resolve,
  resolveResource,
  resourceDir,
  runtimeDir,
  sep: () => Promise.resolve(sep()),
  tempDir,
  templateDir,
  videoDir
}

export const path = isMain() ? nativePath : comlinkPath
