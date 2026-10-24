import _ from "lodash";
import { Profile } from "../../models/profile.js";
import fs from "fs";

export default new (class {
  async getProfile(req, res) {
    const profile = await Profile.findOne({ userID: req.user });

    res.status(200).json({
      data: profile,
    });
  }

  async updateProfile(req, res) {
    const data = _.pick(req.body, ["firstName", "lastName", "bio", "userName"]);
    let profile = await Profile.findOne({ userID: req.user });
    if (req.file) {
      if (
        profile.image != "" &&
        profile.image !=
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNaRT4DeaWk4avv6n6WaVoL6ai6NpFfG3qzicjpw_NQ&s"
      ) {
        fs.unlinkSync(profile.image);
      }
      data.image = req.file.path;
    }

    if (!profile) return res.status(400).send("access denied");

    profile = await Profile.findByIdAndUpdate(profile.id, data, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(profile);
  }
})();
