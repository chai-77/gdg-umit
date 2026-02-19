const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    level: {
      type: String,
      enum: ["Leads", "Workforce"],
      required: true
    },

    department: {
      type: String,
      enum: [
        "Leads",
        "Operations",
        "Technical",
        "PR",
        "Outreach",
        "Content",
        "UI"
      ],
      required: true
    },

    position: {
      type: String,
      required: function () {
        return this.level === "Leads";
      }
    },

    linkedin: {
      type: String,
      default: ""
    },

    image: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

// Prevent Workforce from having position
teamSchema.pre("save", function () {
  if (this.level === "Workforce") {
    this.position = undefined;
  }
});

module.exports = mongoose.model("Team", teamSchema);
