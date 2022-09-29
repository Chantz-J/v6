import * as flatCache from "flat-cache";
import * as path from "path";
import os from "os";

export function cacheLoad(cacheName: string) {
  const cachePath = path.join(os.tmpdir(), "./api/")
  return flatCache.load(cacheName, cachePath)
};