export function extensionToIcon(mimeType: any, extension: any) {
  if (!mimeType.match(/^image/)) {
    return `@/images/file-icons/${extension}.svg`
  }

  return null
}
