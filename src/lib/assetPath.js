import assetUrlMap from '../data/asset_url_map.json';

/**
 * Resolve a content.json `*_asset` filename to its public URL path,
 * matching the original WordPress upload path exactly.
 */
export function assetPath(filename) {
  if (!filename) return null;
  const mapped = assetUrlMap[filename];
  if (!mapped) {
    throw new Error(`No asset URL mapping found for "${filename}"`);
  }
  return mapped;
}
