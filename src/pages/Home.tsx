import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/login");
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <main className="p-6 grid gap-6">
      <h1 className="text-3xl font-bold text-center">مرحبًا بك في كيان</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Button onClick={() => navigate("/invoices")}>📦 الفواتير</Button>
        <Button onClick={() => navigate("/clients")}>👥 العملاء</Button>
        <Button onClick={() => navigate("/suppliers")}>🏬 الموردين</Button>
        <Button onClick={() => navigate("/expenses")}>💸 المصروفات</Button>
        <Button onClick={() => navigate("/reports")}>📊 التقارير</Button>
        <Button onClick={() => signOut(getAuth())}>🚪 تسجيل الخروج</Button>
      </div>
    </main>
  );
}