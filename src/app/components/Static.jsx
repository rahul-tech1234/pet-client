import { Button } from "@heroui/react";
import { FaHeart, FaHome, FaPaw } from "react-icons/fa";

export default function Static() {
  return (
    <section className="py-16 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-3">Why Adopt Pets?</h2>
        <p className="text-gray-500 mb-10">
          Give a homeless pet a loving family and gain a lifelong friend.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Save a Life</h3>
            <p className="text-gray-500">
              Adopting gives homeless pets a second chance at happiness.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FaHome className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Loving Companion</h3>
            <p className="text-gray-500">
              Pets bring unconditional love and joy to every home.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FaPaw className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Support Shelters</h3>
            <p className="text-gray-500">
              Every adoption helps shelters care for more rescued animals.
            </p>
          </div>
        </div>

        <Button color="primary" className="mt-10">
          Adopt Now
        </Button>
      </div>
    </section>
  );
}