'use client';

import { Destination } from '@/assets/type/interfaces';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FooterCountries() {
  const [countries, setCountries] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const { data } = await axios.get<Destination[]>('/json/destination_data.json');
        setCountries(data);
      } catch (error) {
        console.error('Failed to load destinations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return <p className="py-4">Loading...</p>;
  }

  return (
    <ul className="mulish-regular lg:text-base text-sm">
      {countries.map(({ destinationName, url }) =>
        destinationName && url ? (
          <li key={destinationName} className="hover:text-blue-600">
            <Link href={`/study-destinations/${url}`} className="block w-full">
              {destinationName}
            </Link>
          </li>
        ) : null
      )}
    </ul>
  );
}
