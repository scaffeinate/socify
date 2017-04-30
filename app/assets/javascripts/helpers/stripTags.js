export default function stripTags(html) {
  return html
    ? html.replace(/<(?!br\s*\/?)[^>]+>/g, '')
    : '';
}
