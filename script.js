const SUPABASE_URL = "https://tjyazmklqebvbeugawkv.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqeWF6bWtscWVidmJldWdhd2t2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMTYxNDUsImV4cCI6MjA2NjY5MjE0NX0.fH-cFD6Ygp6UxkcF10P2LjkJl2nrq3DOUIdyvWaKoWU";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

supabase.auth.getSession().then(({ data }) => {
  if (!data.session) {
    window.location.href = "register.html"; // Not logged in
  }
});
