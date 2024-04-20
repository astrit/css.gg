export default function ClassMaker(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
