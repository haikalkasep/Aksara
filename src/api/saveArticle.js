import { supabase } from '../config/supabase'; // sesuaikan dengan lokasi file konfigurasi Supabase Anda

const saveArticle = async (articleData) => {
  try {
    const { data, error } = await supabase.from('Artikel').insert([articleData]);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error saving article:', error.message);
    throw error;
  }
};

export default saveArticle;
