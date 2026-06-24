import { createClient, SupabaseClient } from '@supabase/supabase-js';

// 환경변수가 설정돼 있을 때만 Supabase를 사용하고, 없으면 null (로컬 통계로 폴백)
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;

export const isSupabaseEnabled = supabase !== null;
