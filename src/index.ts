/**
 * Transform [text](url) to <a href="url">text</a>
 * 
 * @param {string} markdown 
 */
const link = (markdown: string): string =>
  markdown.replace(
     /\[([^[\\]*?)]\((.*?)\)/g,
    '<a href="$2">$1</a>'
  )

export const parse = link
