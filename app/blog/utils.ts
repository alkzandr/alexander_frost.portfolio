import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getmdxfiles(dir) {
  return fs.readdirsync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readmdxfile(filepath) {
  let rawcontent = fs.readfilesync(filepath, 'utf-8')
  return parsefrontmatter(rawcontent)
}

function getmdxdata(dir) {
  let mdxfiles = getmdxfiles(dir)
  return mdxfiles.map((file) => {
    let { metadata, content } = readmdxfile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getblogposts() {
  return getmdxdata(path.join(process.cwd(), 'app', 'blog', 'posts'))
}

export function formatdate(date: string, includerelative = false) {
  let currentdate = new date()
  if (!date.includes('t')) {
    date = `${date}t00:00:00`
  }
  let targetdate = new date(date)

  let yearsago = currentdate.getfullyear() - targetdate.getfullyear()
  let monthsago = currentdate.getmonth() - targetdate.getmonth()
  let daysago = currentdate.getdate() - targetdate.getdate()

  let formatteddate = ''

  if (yearsago > 0) {
    formatteddate = `${yearsago}y ago`
  } else if (monthsago > 0) {
    formatteddate = `${monthsago}mo ago`
  } else if (daysago > 0) {
    formatteddate = `${daysago}d ago`
  } else {
    formatteddate = 'today'
  }

  let fulldate = targetdate.tolocalestring('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includerelative) {
    return fulldate
  }

  return `${fulldate} (${formatteddate})`
}
