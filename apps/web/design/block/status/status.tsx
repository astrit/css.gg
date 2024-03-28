"use client"

import "@/status/status.css"

type StatusProps = {
  status: "available" | "unavailable"
}

const Signal = () => <div className="signal" />

const Status = ({ status }: StatusProps) => {
  return (
    <button className={`status ${status}`}>
      {status === "available" ? "Running" : "Not Available"}
    </button>
  )
}

export default Status
