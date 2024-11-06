const Place = require("../models/Place");
const { uploadFile } = require("../services/googleCloudStorage");

async function createPlace(req, res) {
  try {
    console.log("req.files:", req.files); // Add this line to log req.files
    const { name, description, type, location, openingTime } = req.body;
    const foodImageFiles = req.files.foodImages;
    const ambienceImageFiles = req.files.ambienceImages;

    if (!foodImageFiles || !ambienceImageFiles) {
      return res
        .status(400)
        .json({ error: "Food images or ambience images are missing" });
    }

    const foodImageUrls = await Promise.all(foodImageFiles.map(uploadFile));
    const ambienceImageUrls = await Promise.all(
      ambienceImageFiles.map(uploadFile)
    );

    const newPlace = new Place({
      name,
      description,
      type,
      location,
      openingTime,
      foodImages: foodImageUrls,
      ambienceImages: ambienceImageUrls,
    });

    await newPlace.save();
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getPlaces(req, res) {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createPlace,
  getPlaces,
};
