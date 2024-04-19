import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <>
        <h1>About Page</h1>
        <button style={{padding:"20px 25px"}}>
            <Link to = {'/'} replace={true}>Go back</Link>
        </button>
    </>
  )
}

