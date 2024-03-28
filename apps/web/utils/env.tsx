export default function dev() {
  return process.env.NEXT_PUBLIC_DEV_ENV === "true"
}
