export function fileDownloader(blob: any, filename: any) {
  const url =
    window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob)

  const anchor: HTMLAnchorElement = document.createElement('a')
  anchor.style.display = 'none'
  anchor.href = url
  anchor.setAttribute('download', filename)

  if (typeof anchor.download === 'undefined') {
    anchor.setAttribute('target', '_blank')
  }

  document.body.appendChild(anchor)
  anchor.click()

  setTimeout(() => {
    document.body.removeChild(anchor)
    window.URL.revokeObjectURL(url)
  }, 100)
}
