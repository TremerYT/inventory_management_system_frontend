import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const upload = async (file, folder, bucket) => {
  const extract = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${extract}`;
  const filePath = `${folder}/${fileName}`;

  const {error} = await supabase
    .storage
    .from(bucket)
    .upload(filePath, file);
  if (error) throw error;
  const {data} = await supabase
    .storage
    .from(bucket)
    .getPublicUrl(filePath);

  return data.publicUrl;
}
