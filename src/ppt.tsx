import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface PassportData {
  country: string;
  visaFreeCount: number;
  rank?: number;
}

const PassportRanking: React.FC = () => {
  const [data, setData] = useState<PassportData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Placeholder: replace with your own data source or API
    setData([
      { country: 'Singapore', visaFreeCount: 193, rank: 1 },
      { country: 'Japan', visaFreeCount: 190, rank: 2 },
      { country: 'South Korea', visaFreeCount: 190, rank: 2 },
      { country: 'United States', visaFreeCount: 182, rank: 10 },
      { country: 'UAE', visaFreeCount: 184, rank: 8 },
      { country: 'Germany', visaFreeCount: 189, rank: 3 },
      // ... add more entries as needed
    ]);
    setLoading(false);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Global Passport Ranking 2025</h1>
      <p className="mb-6">
        Based on the Henley Passport Index, ranking passports by number of visa-free or visa-on-arrival destinations.
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Rank</th>
              <th className="p-3">Country</th>
              <th className="p-3">Visa-Free Destinations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-3">{p.rank ?? idx + 1}</td>
                <td className="p-3">{p.country}</td>
                <td className="p-3">{p.visaFreeCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p className="mt-6 text-sm text-gray-600">
        For full rankings and methodology, visit{" "}
        <a href="https://www.henleyglobal.com/passport-index/ranking" className="underline" target="_blank" rel="noopener noreferrer">
          Henley Passport Index
        </a>.
      </p>
    </div>
  );
};

export default PassportRanking;
