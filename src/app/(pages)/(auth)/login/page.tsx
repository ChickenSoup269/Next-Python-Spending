"use client"

import { useState } from "react"

export default function Login() {
  const [email /*setEmail*/] = useState("Thiendeptrai@gmail.com")
  console.log("login-page")

  return (
    <div className="warpper-login">
      <h1>Đây là trang đăng nhập nhé mấy em</h1>
      {email}
    </div>
  )
}
