import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        To view the bug, use this link to navigate:&nbsp;
        <Link href="/catchall/[...param]" as="/catchall/:42">
          <a>Follow me!</a>
        </Link>
        <hr/>
        <Link href="/catchall/[...param]" as="/catchall/:420">
          <a>This works fine</a>
        </Link>
        <hr/>
        <Link href="/catchall/[...param]" as="/catchall/padding:42padding">
          <a>This also shows the bug</a>
        </Link>
      </main>
    </div>
  )
}
