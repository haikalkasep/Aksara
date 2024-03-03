import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../config/supabase.js";
import {Image} from "@nextui-org/react"

export default function DetailMateri() {
  const [data, setData] = useState(null);
  const { materiId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: materiData, error } = await supabase
          .from("postingan")
          .select("*")
          .eq("id", materiId)
          .single();

        if (error) {
          console.error(error.message);
          return;
        }

        setData(materiData);

        // Fetch and update image URLs if data is available
        if (materiData) {
          for (const materi of [materiData]) {
            const res = await supabase.storage
              .from("gambar/images")
              .getPublicUrl(materi.gambar);

            if (res.error) {
              console.error(res.error.message);
            } else {
              console.log(res.data.publicUrl);
              materi.gambar = res.data.publicUrl;
              console.log(res.data.publicUrl);
            }
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, [materiId]);

  return (
    <>
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm" style={{width: ""}}>
        {data && (
          <>
            <Image
              src={data.gambar}
              alt={data.Judul}
              className="w-full h-auto max-w-full max-h-96 object-contain"
            />
            <div className="p-6">
              <h1 className="text-3xl font-semibold mb-4">{data?.Judul}</h1>
              <p className="text-gray-600 mb-6">{data.Deskripsi}</p>
              {/* Tambahkan komponen lain di sini */}
              <Link
                to="/materi"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
              >
                Kembali
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
    </>
  );
}
