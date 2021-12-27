import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to Jost.io!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="He felt that his whole life was some kind of dream, and he sometimes wondered whose it was and whether they were enjoying it." />
        <p className="description">
          - Douglas Adams, Hitchhiker's guide to the galaxy
        </p>
      </main>
    </div>
  )
}
