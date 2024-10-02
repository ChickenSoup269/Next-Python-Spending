// Chuyển trang bằng button components
"use client"
import { useRouter } from "next/navigation"
import { redirect } from "next/navigation"

const isAuth = false

if (!isAuth) {
  redirect("/login")
}

export default function ButtonRegister() {
  const router = useRouter()
  const handleNavigate = () => {
    router.push("/login")
  }

  return (
    <div>
      {" "}
      <button onClick={handleNavigate}>Đăng nhập bằng button</button>
    </div>
  )
}
