/* eslint-disable @typescript-eslint/no-explicit-any */
export async function safeFetch<T = any>(url: string): Promise<T | null> {
    try {
      const res = await fetch(url, { cache: "no-store" });
  
      if (!res.ok) {
        console.error(`❌ Fetch failed for ${url}: ${res.status}`);
        return null;
      }
  
      return await res.json();
    } catch (err) {
      console.error(`❌ Fetch error for ${url}:`, err);
      return null;
    }
  }
  