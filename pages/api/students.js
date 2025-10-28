// pages/api/students.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    // ✅ Fetch from the real external API
    const response = await axios.get("https://course.summitglobal.id/students");

    console.log("📦 Raw data from API:", response.data);

    // ✅ Send it back to your frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.message);

    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Status:", error.response.status);
    }

    res.status(500).json({ error: "Failed to fetch students" });
  }
}
