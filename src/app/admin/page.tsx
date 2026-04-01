"use client";

import { useState, useEffect } from "react";
import { CldUploadWidget, type CloudinaryUploadWidgetResults } from "next-cloudinary";
import { supabase } from "@/utils/supabase";
import { toast } from "sonner";
import { ImagePlus, LogOut, ArrowLeft, Loader2, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Work {
  id: number;
  title: string;
  category: string;
  image: string;
  created_at: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Sketsa Wajah");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [works, setWorks] = useState<Work[]>([]);
  const [isLoadingWorks, setIsLoadingWorks] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Simple hardcoded password protection for now
  // In a real app, this should be handled by Supabase Auth
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

  const fetchWorks = async () => {
    setIsLoadingWorks(true);
    const { data, error } = await supabase
      .from("works")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) {
      toast.error("Gagal mengambil data portfolio");
    } else {
      setWorks(data || []);
    }
    setIsLoadingWorks(false);
  };

  useEffect(() => {
    const authStatus = localStorage.getItem("kyy_auth");
    if (authStatus === "true") {
      setTimeout(() => {
        setIsAuthenticated(true);
        fetchWorks();
      }, 0);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("kyy_auth", "true");
      fetchWorks();
      toast.success("Login Berhasil");
    } else {
      toast.error("Password Salah");
    }
  };

  const handleUploadSuccess = (result: CloudinaryUploadWidgetResults) => {
    // result.info will contain the upload information including secure_url
    if (result.info && typeof result.info !== "string") {
      setImageUrl(result.info.secure_url);
      toast.success("Gambar berhasil di-upload!");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl || !title || !category) {
      toast.error("Mohon lengkapi semua field");
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase
      .from("works")
      .insert([
        { title, category, image: imageUrl }
      ]);

    if (error) {
      toast.error("Gagal menyimpan ke database");
    } else {
      toast.success("Karya baru berhasil ditambahkan!");
      setTitle("");
      setImageUrl("");
      fetchWorks();
    }
    setIsSubmitting(false);
  };

  const confirmDelete = async () => {
    if (!deletingId) return;
    
    setIsDeleting(true);
    const { error } = await supabase
      .from("works")
      .delete()
      .eq("id", deletingId);

    if (error) {
      toast.error("Gagal menghapus karya");
    } else {
      toast.success("Karya berhasil dihapus");
      fetchWorks();
    }
    setIsDeleting(false);
    setDeletingId(null);
  };

  const handleDelete = (id: number) => {
    setDeletingId(id);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 p-4 sm:p-6">
        <div className="w-full max-w-md bg-white p-8 sm:p-12 border border-zinc-100 shadow-sm">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl font-serif mb-2">Admin Access</h1>
            <p className="text-zinc-500 text-sm">Masukan password untuk mengelola galeri.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-2 block">Password</label>
              <input
                type="password"
                className="w-full border-b-2 border-zinc-100 py-3 focus:border-zinc-950 outline-none transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full py-4 bg-zinc-950 text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
              Masuk
            </button>
            <Link href="/" className="flex items-center justify-center gap-2 text-zinc-400 text-xs hover:text-zinc-950 transition-colors mt-8">
              <ArrowLeft size={14} /> Kembali ke Halaman Utama
            </Link>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <nav className="bg-white border-b border-zinc-100 px-4 sm:px-6 py-4 sm:py-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-serif italic text-xl sm:text-2xl">kyy.art <span className="not-italic text-[8px] sm:text-[10px] uppercase font-bold text-zinc-400 ml-2 tracking-widest">Dashboard</span></Link>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors">Lihat Situs</Link>
            <button 
              onClick={() => {
                localStorage.removeItem("kyy_auth");
                setIsAuthenticated(false);
              }}
              className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors"
            >
              <LogOut size={12} className="sm:w-3.5 sm:h-3.5" /> Keluar
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* UPLOAD FORM */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-white p-6 sm:p-8 border border-zinc-100 shadow-sm relative">
              <h2 className="text-xl sm:text-2xl font-serif mb-6 sm:mb-8">Tambah Karya Baru</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-2 block">Judul Karya</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Sketsa Pengantin"
                    className="w-full border-b border-zinc-100 py-2 focus:border-zinc-950 outline-none transition-colors"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-2 block">Kategori</label>
                  <select
                    className="w-full border-b border-zinc-100 py-2 focus:border-zinc-950 outline-none transition-colors bg-transparent"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Sketsa Wajah">Sketsa Wajah</option>
                    <option value="Digital Painting">Digital Painting</option>
                    <option value="Wedding Gift">Wedding Gift</option>
                  </select>
                </div>
                
                <div>
                   <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-4 block">Gambar</label>
                   {!imageUrl ? (
                     <CldUploadWidget 
                        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "kyy_art_preset"}
                        onSuccess={handleUploadSuccess}
                      >
                        {({ open }) => (
                          <button
                            type="button"
                            onClick={() => open()}
                            className="w-full aspect-square border-2 border-dashed border-zinc-100 flex flex-col items-center justify-center gap-4 hover:border-zinc-300 hover:bg-zinc-50 transition-all rounded-lg"
                          >
                            <ImagePlus className="text-zinc-300" size={32} />
                            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Pilih File</span>
                          </button>
                        )}
                      </CldUploadWidget>
                   ) : (
                     <div className="relative aspect-square border border-zinc-100 rounded-lg overflow-hidden group">
                        <Image src={imageUrl} alt="Preview" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                           <button 
                             type="button"
                             onClick={() => setImageUrl("")}
                             className="text-white text-xs font-bold uppercase tracking-widest border border-white px-4 py-2 hover:bg-white hover:text-black transition-all"
                           >
                              Ganti Gambar
                           </button>
                        </div>
                     </div>
                   )}
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-zinc-950 text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Menyimpan...
                    </>
                  ) : "Simpan Karya"}
                </button>
              </form>
            </div>
          </div>

          {/* LIST WORKS */}
          <div className="lg:col-span-8 order-1 lg:order-2">
             <div className="flex justify-between items-center sm:items-end mb-6 sm:mb-8">
                <div>
                   <h2 className="text-xl sm:text-2xl font-serif">Koleksi Galeri</h2>
                   <p className="text-zinc-500 text-xs sm:text-sm mt-1 sm:mt-2">Daftar karya yang ada di homepage.</p>
                </div>
                <span className="text-[8px] sm:text-[10px] uppercase font-bold text-zinc-400 tracking-widest">{works.length} Karya</span>
             </div>

             {isLoadingWorks ? (
               <div className="py-24 flex justify-center">
                  <Loader2 className="animate-spin text-zinc-300" size={32} />
               </div>
             ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {works.map((work) => (
                    <div key={work.id} className="bg-white border border-zinc-100 p-4 flex gap-4 group hover:shadow-md transition-all">
                       <div className="relative w-24 h-24 shrink-0 bg-zinc-50 overflow-hidden">
                          <Image src={work.image} alt={work.title} fill className="object-cover" />
                       </div>
                       <div className="flex flex-col justify-between grow py-1">
                          <div>
                            <span className="text-[8px] uppercase font-bold text-zinc-400 tracking-widest block mb-1">{work.category}</span>
                            <h3 className="font-serif text-lg leading-tight">{work.title}</h3>
                          </div>
                          <button 
                            onClick={() => handleDelete(work.id)}
                            className="text-red-400 hover:text-red-600 transition-colors self-start"
                            title="Hapus"
                          >
                             <Trash2 size={16} />
                          </button>
                       </div>
                    </div>
                  ))}
                  {works.length === 0 && (
                    <div className="col-span-full py-24 border border-dashed border-zinc-200 flex flex-col items-center justify-center gap-4 text-zinc-400">
                       <p className="text-sm">Belum ada karya. Tambahkan karya baru.</p>
                    </div>
                  )}
               </div>
             )}
          </div>
        </div>
      </main>

      {/* CUSTOM DELETE DIALOG */}
      <AnimatePresence>
        {deletingId && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setDeletingId(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-sm p-8 sm:p-12 shadow-2xl border border-zinc-100 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                <Trash2 className="text-red-500 w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4">Hapus Karya?</h3>
              <p className="text-zinc-500 text-xs sm:text-sm mb-8 sm:mb-12">Tindakan ini tidak dapat dibatalkan. Karya akan dihapus permanen dari galeri.</p>
              
              <div className="grid grid-cols-2 gap-4 w-full">
                <button 
                  onClick={() => setDeletingId(null)}
                  className="py-4 border border-zinc-200 text-[10px] uppercase font-bold tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors"
                >
                  Batal
                </button>
                <button 
                  disabled={isDeleting}
                  onClick={confirmDelete}
                  className="py-4 bg-red-600 text-white text-[10px] uppercase font-bold tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  {isDeleting ? (
                    <Loader2 size={12} className="animate-spin" />
                  ) : 'Hapus'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
