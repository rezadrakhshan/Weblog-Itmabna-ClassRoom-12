import _ from "lodash";
import { Profile } from "../../models/profile.js";

export default new (class {
  async getProfile(req, res) {
    const profile = await Profile.findOne({userID: req.user});

    res.status(200).json({
      data: profile,
    });
  }

  async updateProfile(req, res) {
    const data = _.pick(req.body, ["firstName", "lastName", "bio"]);
    let profile = await Profile.findOne({userID: req.user});

    if(!profile)
        return res.status(400).send("access denied")

    profile = await Profile.findByIdAndUpdate(profile.id, data, {
        new: true,
        runValidators: true,
    })

    res.status(200).json(profile)
  }
})();
