import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to Jost.io!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Welcome to Jost.io! This is a quote from Douglas Adams' The Hitchhiker's Guide To The Galaxy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Header title="He felt that his whole life was some kind of dream, and he sometimes wondered whose it was and whether they were enjoying it." />
        <p className="description">
          - Douglas Adams, The Hitchhiker's Guide To The Galaxy
        </p>
      </main>
    </div>
  )
}

