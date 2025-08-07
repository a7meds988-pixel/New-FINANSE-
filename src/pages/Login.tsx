import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/");
    } catch (err) {
      setError("خطأ في تسجيل الدخول");
    }
  };

  return (
    <main className="p-6 max-w-sm mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-center">تسجيل الدخول</h2>
      <Input placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="كلمة المرور" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="text-red-500">{error}</p>}
      <Button onClick={handleLogin}>➡️ دخول</Button>
    </main>
  );
}