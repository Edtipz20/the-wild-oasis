import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mwcbeugirdgztitogqdd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13Y2JldWdpcmRnenRpdG9ncWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMzY4MjgsImV4cCI6MjA4ODkxMjgyOH0.B-xxWArRbF0c13htY67oA3zbOjPjBIaxnSlzbk-qkIE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
