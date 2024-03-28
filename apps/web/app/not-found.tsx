import Link from "next/link"

export default function NotFound() {
  return (
    <div className="layout core 404">
      <h1 className="heading-medium">404 - Page Not Found</h1>
      <Link href="/">Go back</Link>
    </div>
  )
}
