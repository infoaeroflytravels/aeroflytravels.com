import { useParams, Link, useNavigate } from "react-router-dom";
import { passports } from "../../data/passports";

export default function PassportDetail() {
  const { country } = useParams();
  const navigate = useNavigate();

  // Find the current passport
  const index = passports.findIndex((p) => p.id === country);
  const passport = passports[index];

  if (!passport) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg">⚠️ Passport not found</p>
      </div>
    );
  }

  const prev = passports[index - 1];
  const next = passports[index + 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/passport"
          className="bg-gray-800 hover:bg-gray-700 text-sm px-4 py-2 rounded-full"
        >
          ← Back to All Passports
        </Link>
      </div>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Passport Image */}
        <div className="flex justify-center">
          <img
            src={passport.image}
            alt={passport.country}
            className="w-72 shadow-lg rounded-lg"
          />
        </div>

        {/* Passport Info */}
        <div>
          <h2 className="text-gray-400 text-sm uppercase">Passport of</h2>
          <h1 className="text-4xl font-bold mb-6">{passport.country}</h1>

          <div className="flex gap-8 mb-8">
            <div>
              <p className="text-2xl font-bold">{passport.mobilityScore}</p>
              <p className="text-gray-400 text-sm">Mobility Score</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{passport.globalRank}</p>
              <p className="text-gray-400 text-sm">Global Rank</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{passport.individualRank}</p>
              <p className="text-gray-400 text-sm">Individual Rank</p>
            </div>
          </div>

          {/* Visa Details */}
          <div className="flex gap-4 mb-8 flex-wrap">
            <div className="bg-gray-800 px-4 py-3 rounded-lg text-center">
              <p className="text-xl font-bold">{passport.visaFree}</p>
              <p className="text-gray-400 text-sm">Visa-Free</p>
            </div>
            <div className="bg-gray-800 px-4 py-3 rounded-lg text-center">
              <p className="text-xl font-bold">{passport.voa}</p>
              <p className="text-gray-400 text-sm">VoA</p>
            </div>
            <div className="bg-gray-800 px-4 py-3 rounded-lg text-center">
              <p className="text-xl font-bold">{passport.eta}</p>
              <p className="text-gray-400 text-sm">ETA</p>
            </div>
            <div className="bg-gray-800 px-4 py-3 rounded-lg text-center">
              <p className="text-xl font-bold">{passport.evisa}</p>
              <p className="text-gray-400 text-sm">E-Visa</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">{passport.description}</p>
        </div>
      </div>

      {/* Prev / Next Navigation */}
      <div className="flex justify-between mt-12 text-sm text-gray-400">
        {prev ? (
          <button
            onClick={() => navigate(`/passport/${prev.id}`)}
            className="hover:text-white"
          >
            ← {prev.country}
          </button>
        ) : (
          <span />
        )}

        {next ? (
          <button
            onClick={() => navigate(`/passport/${next.id}`)}
            className="hover:text-white"
          >
            {next.country} →
          </button>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
