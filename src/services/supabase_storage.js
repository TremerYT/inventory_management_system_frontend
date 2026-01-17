import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const upload = async (file, folder="products") => {
  const extract = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${extract}`;
  const filePath = `${folder}/${fileName}`;

  const {error} = await supabase
    .storage
    .from('productImages')
    .upload(filePath, file);
  if (error) throw error;
  const {data} = await supabase
    .storage
    .from('productImages')
    .getPublicUrl(filePath);

  return data.publicUrl;
}