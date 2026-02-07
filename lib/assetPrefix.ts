export function getAssetPath(path: string): string {
  // Se o path já começa com http:// ou https://, retorna como está
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Retorna o path como está (sem basePath)
  return path;
}
