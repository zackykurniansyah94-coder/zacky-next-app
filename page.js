import fs from 'fs'
import path from 'path'
import Link from 'next/link'
export default function Blog(){
  let posts = [];
  try {
    const postsDir = path.join(process.cwd(),'content','posts');
    const files = fs.readdirSync(postsDir);
    posts = files.map(f => {
      const txt = fs.readFileSync(path.join(postsDir,f),'utf8');
      const m = txt.match(/title:\s*"(.+)"/i);
      const d = txt.match(/date:\s*"(.+)"/i);
      return { slug: f.replace(/\.md$/,''), title: m?m[1]:f, date: d?d[1]:'' }
    });
  } catch(e){}
  return (<div><h1>Blog</h1><ul>{posts.map(p=><li key={p.slug}><Link href={'/blog/'+p.slug}>{p.title}</Link></li>)}</ul></div>)
}
