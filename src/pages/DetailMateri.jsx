import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../config/supabase.js";

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
      <main>
        <section>
          {data && (
            <div>
              <h1>{data.Judul}</h1>
              <p>{data.Deskripsi}</p>
              <img src={data.gambar} alt={data.Judul} />
            </div>
          )}
        </section>
      </main>
    </>
  );
}
