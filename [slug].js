import fs from 'fs'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'

export default async function Post({ params }) {
  const slug = params.slug;
  const postsDir = path.join(process.cwd(),'content','posts');
  const full = path.join(postsDir, `${slug}.md`);
  let content = '';
  try { content = fs.readFileSync(full,'utf8'); } catch(e){ content = 'Artikel tidak ditemukan.' }
  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();
  return <article className="card"><div dangerouslySetInnerHTML={{__html: htmlContent}} /></article>
}
